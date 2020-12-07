import React, {useEffect, useState} from 'react'

import './Articles.css'

import * as Requests from '../../Requests'



const Articles =  ()  => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        Requests.getAllArticles().then(data=>{
            if(data.statusCode !== 404) {
                setArticles(data)
            }
        }).catch(() => null);
    },[]);


    return (
        <div>
        {/*<h1>Welcome to our monthly articles</h1>*/}
            
        {articles.map(article=>
             
                
                
                <div className = 'card text-center'>
                    <div className = 'card-body text-dark'>
                        
                        <h4 className = 'card-title'>{article.title}</h4>
                        <p className = 'card-text text-secondary'>{(article.content).substring(0,100)}...</p>
                        <a href = {'/article/'+article.id} className = 'btn btn-outline-success' >Read More</a>
                    </div>
                </div>
        
            )
        }
        
        </div>

    )
}

export default Articles
