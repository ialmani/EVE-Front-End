
import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom';
import './Articles.css'
import * as Requests from '../../Requests'
import SearchBar from './SearchBar'


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
        {articles.map(article=>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{(article.content).substring(0,100)}...</p>
              <Link to = {'articles/'+article.id}>
                <button class="btn btn-success">Read More</button>
              </Link>
              <p className="card-text">
              <small className="text-muted">{article.author}</small>
              </p>
            </div>
          </div>
        )}
      </div>)
        
      }
        return ( 
          <div className = "articles-container">
          {searchResults.map(article=>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{(article.content).substring(0,100)}...</p>
                <Link to = {'articles/'+article.id}>
                  <button class="btn btn-success">Read More</button>
                </Link>
                <p className="card-text">
                <small className="text-muted">{article.author}</small>
                </p>
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
