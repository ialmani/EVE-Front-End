import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

 import './FullArticle.css'

import * as Requests from '../../Requests'
import profilePic from '../../assets/profilepic.png'




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
               <div className = "comments-container">
                   <div className = "row bootstrap snippets bootdeys">
                       <div className ="col-md-8 col-sm-12">
                            <div className = "comment-wrapper">
                                <div className = "panel panel-info">
                                    <div className = "panel-heading">
                                        
                                    </div>
                                    <div className = "panel-body">
                                        <textarea className = "form-control" placeholder = "write a comment..." rows = "3"></textarea>
                                        <br/>
                                        <button type = "button" className = "btn btn-info pull-right">Post</button>
                                        <div className = "clearfix"></div>
                                        <hr/>
                                        <ul className = "media-list">
                                            <li className = "media">
                                                <a href = "#" className = "pull-left">
                                                    <img src = {profilePic}/>
                                                </a>
                                                <div className="media-body">
                                                {/* <span className="text-muted pull-right">
                                                <small className="text-muted">30 min ago</small>
                                                </span> */}
                                                <strong className="text-success">@MartinoMont</strong>
                                                    <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Lorem ipsum dolor sit amet.
                                                    </p>
                                                </div>
                                            </li>
                                           
                                        </ul>

                                    </div>
                                </div>
                            </div>
                           
                       </div>
                   </div>
               </div>

            </div>
      

    )
}

export default FullArticle
