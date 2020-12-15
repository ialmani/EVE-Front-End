import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

 import './FullArticle.css'

import * as Requests from '../../Requests'




const FullArticle =  ()  => {
    const [article, setArticle] = useState([]);
    let {id} = useParams();


    useEffect(()=>{

        Requests.getArticle(id).then(data=>{
            if(data.statusCode !== 404) {
                setArticle(data)

            }
        }).catch((err) => console.log(err));
    });


    return (
        <div>
       
                <div className = 'article-wrapper' >
                    
                        <div className = 'article-content'>
                            <h3 className = 'article-title'>{article.title}</h3>
                            <h4 className='article-author'>{article.author}</h4>
                            <p className = 'article-content'>{article.content}</p>
                       
                    
                    </div>
                  
                </div>


        </div>

    )
}

export default FullArticle
