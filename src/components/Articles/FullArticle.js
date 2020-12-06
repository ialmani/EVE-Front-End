import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

// import './Article.css'

import * as Requests from '../../Requests'




const FullArticle =  ()  => {
    const [article, setArticle] = useState([]);
    let {id} = useParams();

    useEffect(()=>{
        Requests.getArticle(id).then(data=>{
            if(data.statusCode !== 404) {
                setArticle(data)
            }
        }).catch(() => null);
    },[]);


    return (
        <div>

                <div className = 'article-box'>


                    <h3 className = 'title'>{article.title}</h3>
                    <h4 className='author'>{article.author}</h4>
                    <p className = 'text'>{article.content}</p>
                </div>


        </div>

    )
}

export default FullArticle
