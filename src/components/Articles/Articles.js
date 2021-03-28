import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import profileImg from '../../assets/profilepic.png'
import articleImg from '../../assets/articles.jpg'
import './Articles.css'
import * as Requests from '../../Requests'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        Requests.getAllArticles().then(data=>{
            if(data.statusCode !== 404) {
                setArticles(data)
            }
        }).catch(() => null);
    },[]);
    return (
        <div className = "full-page">
          <div className="search-bar-section">
            <div className="search-bar-container">
              <input className='search-bar'></input>
              <button className="search-btn"> Search</button>
            </div>
          </div>
          <div className = "articles-container">
            {articles.map(article=>
              <div className="card mb-4" >
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    {(article.content).substring(0,100)}...
                  </p>
                  <Link to = {'articles/'+article.id}>
                  <button type="button" class="btn btn-success">Read More</button>
                  </Link>
                  <p className="card-text">
                    {article.author}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
)
}

export default Articles
