import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom';
import * as Requests from '../../Requests'
import SearchBar from '../Articles/SearchBar'


const Zooms = (props) => {


    const [zooms, setZooms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
      Requests.getAllZooms().then(data=>{
          if(data.statusCode !== 404) {
              setZooms(data)
          }
      }).catch(() => null);
  },[]);
    const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if (searchTerm !== ""){
        const newZoomList = zooms.filter((zoom) => {
          return Object.values(zoom).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ;

        })
        setSearchResults(newZoomList);
        console.log(newZoomList);
      }

      else {
        setSearchResults(zooms);
      }
    };

    const renderZooms = (searchTerm) => {
      if (searchTerm.length <= 0) {
        return (
        <div className = "articles-container">
        {zooms.map(zoom=>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title font-roboto zoom-title">{zoom.title}</h5>
              <p className="card-text font-roboto">{(zoom.description).substring(0,30)}...</p>
              <p className='card-text2 font-roboto'>Date:{(zoom.start_date).substring(0,10)}</p>
              <p className='card-text2 font-roboto'>Time:{(zoom.start_date).substring(11,16)}</p>
              <p className='card-text2 font-roboto'>End-time:{(zoom.end_date).substring(11,16)}</p>
              <a href = {zoom.zoom_url}><button type='button' className='btn btn-success font-roboto article-btn'>Go To Zoom</button></a>
            </div>
          </div>
        )}
      </div>)


      }
      return (
          <div className='articles-container'>
             {searchResults.map(zoom=>
              <div className='card mb-4'>
                <div className='card-body'>
                  <h5 className='card-title font-roboto'>{zoom.title}</h5>
                  <p className='card-text font-roboto'>{(zoom.description).substring(0,30)}...</p>
                  <p className='card-text2 font-roboto'>Date:{(zoom.start_date).substring(0,10)}</p>
                  <p className='card-text2 font-roboto'>Time:{(zoom.start_date).substring(11,16)}</p>
                  <p className='card-text2 font-roboto'>End-time:{(zoom.end_date).substring(11,16)}</p>
                  <a href = {zoom.zoom_url}><button type='button' class='btn btn-success font-roboto'>Go To Zoom</button></a>
                </div>
              </div>
            )}
          </div>)
    }





    return (
        <div className = "full-page font-roboto">

        <SearchBar
          {...props}
          term = {searchTerm}
          searchKeyword = {searchHandler}

        />

        {renderZooms(searchTerm)}

      </div>
)
}


export default Zooms
