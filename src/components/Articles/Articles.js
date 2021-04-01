import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import * as Requests from '../../Requests'
import './Articles.css'
import '../Button.css'

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
    <div className='full-page'>
      <div className='articles-container'>
        {articles.map(article=>
          <div className='card mb-4'>
            <div className='card-body'>
              <h5 className='card-title'>{article.title}</h5>
              <p className='card-text'>{(article.content).substring(0,100)}...</p>
              <p className='card-text2'>{article.author}</p>
              <Link to = {'articles/'+article.id}><button type='button' class='btn btn-success'>Read More</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )}

export default Articles
