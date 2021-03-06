import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom';
import './Articles.css'
import * as Requests from '../../Requests'
import SearchBar from './SearchBar'
import BackButton from '../BackButton'


const Articles = (props) => {

  
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
      Requests.getAllArticles().then(data=>{
          if(data.statusCode !== 404) {
              setArticles(data)
          }
      }).catch(() => null);
  },[]);
    const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if (searchTerm !== ""){
        const newArticleList = articles.filter((article) => {
          return Object.values(article).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ;
          
        })
        setSearchResults(newArticleList);
        console.log(newArticleList);
      }
      
      else {
        setSearchResults(articles);
      }
    };

    const renderArticles = (searchTerm) => {
      if (searchTerm.length <= 0) {
        return ( 
        <div className = "articles-container">
          <BackButton/>
      
        {articles.map(article=>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title font-roboto article-title">{article.title}</h5>
              <p className="card-text font-roboto">{(article.content).substring(0,30)}...</p>
              <p className='card-text2 font-roboto'>{article.author}</p>
              <Link to = {'articles/'+article.id}><button type='button' className='btn btn-success font-roboto article-btn'>Read More</button></Link>
            </div>
          </div>
        )}
      </div>)

        
      }
      return (
          <div className='articles-container'>
             {searchResults.map(article=>
              <div className='card mb-4'>
                <div className='card-body'>
                  <h5 className='card-title font-roboto'>{article.title}</h5>
                  <p className='card-text font-roboto'>{(article.content).substring(0,30)}...</p>
                  <p className='card-text2 font-roboto'>{article.author}</p>
                  <Link to = {'articles/'+article.id}><button type='button' class='btn btn-success font-roboto'>Read More</button></Link>
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

        {renderArticles(searchTerm)}

      </div>
)
}


export default Articles
