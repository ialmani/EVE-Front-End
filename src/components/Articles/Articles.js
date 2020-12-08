import React, {useEffect, useState} from 'react'
import aboutImg from '../../assets/about.svg'
import profileImg from '../../assets/profilepic.png'
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
        <div>
        
        {articles.map(article=>
        <div className = "wrapper">
            <div className = "card">
                <div className = "card-banner">
                    <p className = "category-tag"> Genre </p>
                    <img className = "banner-img" src = {aboutImg}/>
                </div>
                <div className = "card-body">
                    
                    <h2 className = "blog-title"> {article.title}</h2>
                    <p className = "blog-description">{(article.content).substring(0,100)}... </p>
                    <a href = {'/article/'+article.id} className = 'btn btn-outline-success' >Read More</a>
                <div className = "card-profile">
                    <img className = "profile-img" src = {profileImg} />

                    <div className = "card-profile-info"> </div>
                        <h3 className = "profile-name"> {article.author}</h3>
                        <p className = "blog-date">date</p>
                  
                </div>       
                </div>
                
                
            </div>
            
        </div>
        )
    }
    </div>
    )
}

export default Articles
