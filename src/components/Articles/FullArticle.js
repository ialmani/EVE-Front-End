import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

 import './FullArticle.css'

import * as Requests from '../../Requests'
import profilePic from '../../assets/profilepic.png'




const FullArticle =  ()  => {
    const [article, setArticle] = useState([]);
    const [user, setUser]  = useState([]);
    const [username, setUsername] = useState([]);
    const [newComment, setNewComment] = useState({
        article: null,
        user: null,
        body:null
    });
    const [comments, setComments] = useState([])
    let {id} = useParams();


    useEffect(()=>{
        Requests.getArticle(id).then(data=>{
            if(data.statusCode !== 404) {
                setArticle(data)

            }
        }).catch((err) => console.log(err));
    },[]);

    useEffect(()=>{
        Requests.getArticleComments(id).then(data=>{
            if(data.statusCode !== 404) {
                setComments(data)
            }
        })
    },[]);

    useEffect(()=>{
        Requests.getUserDetails().then(data=>{
            if(data.statusCode !== 401){
                setUser(data)
            }
        })
    },[])

    const createArticleComment = ()=> {
        // console.log(newComment);
        setNewComment({...newComment, article:id, user: user.id});
        Requests.createComment(id, 'articles', newComment).then((response) => {
            console.log(response);
        }).catch(status=>
            alert(status));
    }


    const getUsername =(userID)=>{
        Requests.getUser(userID).then(data=>{
                setUsername(data['username'])

        })


    }





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
                                        {localStorage.getItem('token') &&
                                        <div>
                                            <form onSubmit={createArticleComment}>
                                            <textarea className="form-control" placeholder="write a comment..." rows="3" onChange={e=>setNewComment({...newComment, article:id, user:user.id, body:e.target.value})}/>
                                            <br/>
                                            <input type="submit" className="btn btn-info pull-right"/>
                                            <div className="clearfix"/>
                                            <hr/>
                                            </form>
                                        </div>
                                        }
                                        {comments.map(comment =>
                                            <ul className="media-list">
                                                <li className="media">
                                                    <a href="#" className="pull-left">
                                                        <img src={profilePic}/>
                                                    </a>
                                                    <div className="media-body">
                                                        {getUsername(comment.user)}
                                                        <strong className="text-success">{username}</strong>
                                                        <p>
                                                            {comment.body}
                                                        </p>
                                                    </div>
                                                </li>

                                            </ul>)
                                        }


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
