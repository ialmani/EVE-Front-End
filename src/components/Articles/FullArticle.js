import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import './FullArticle.css'
import * as Requests from '../../Requests'
import profilePic from '../../assets/profilepic.png'
import './FullArticle.css'
import BackButton from '../BackButton'


const FullArticle =  ()  => {

    const [article, setArticle] = useState([]);
    const [user, setUser] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        article: null,
        user_id: null,
        username: null,
        body: null
    });

    let {id} = useParams();

    useEffect(()=>{
        Requests.getArticle(id).then(data=>{
            if(data.statusCode !== 404) {
                setArticle(data)

            }
        }).catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        Requests.getArticleComments(id).then(data => {
            if (data.statusCode !== 404) {
                setComments(data)
            }
        })
    }, []);

    useEffect(() => {
        Requests.getUser(localStorage.getItem("current_id")).then(data => {
            if (data.statusCode !== 401) {
                setUser(data)
            }
        })
    }, [])

    const createArticleComment = () => {
        console.log(user.username);
        setNewComment({ ...newComment, article: id, user: user.id, username: user.username });
        Requests.createComment(id, 'articles', newComment).then((response) => {
            console.log(response);
        }).catch(status =>
            alert(status));
    }
    

    return (
        <div>
            <div className='article-wrapper'>
                <BackButton/>
                <div className='article-content'>
                    <h3 className='article-title'>{article.title}</h3>
                    <h4 className='article-author'>{article.author}</h4>
                    <p className='article-content'>{article.content}</p>
                </div>
            </div>
            <div className='comments-container'>
                <div className='row bootstrap snippets bootdeys'>
                    <div className='col-md-8 col-sm-12'>
                        <div className='comment-wrapper'>
                            <div className='panel panel-info'>
                                <div className='panel-heading'></div>
                                <div className='panel-body'>
                                    {localStorage.getItem('token') &&
                                        <div>
                                            <form onSubmit={createArticleComment}>
                                                <h2 class="commentHeader">Leave a Comment below !!</h2>
                                                <textarea className='commentWrite' placeholder='write a comment...' rows='3' onChange={e => setNewComment({ ...newComment, article: id, user_id: user.id, username: user.username, body: e.target.value })} />
                                                <br />
                                                <input type='submit' className='btn btn-info pull-right' />
                                                <div className='clearfix' />
                                                <hr />
                                            </form>
                                        </div>
                                    }
                                    <h2 className="commentHeader font-roboto">Comment Section</h2>
                                    {comments.map(comment =>
                                        <ul className='media-list'>
                                            <li className='media'>
                                                <a href='#' className='pull-left'>
                                                    <img src={profilePic} />
                                                </a>
                                                <div className='media-body'>
                                                    <strong className='text-success font-roboto'>{comment.username}</strong>
                                                    <p>{comment.body}</p>
                                                </div>
                                            </li>
                                            <hr />
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
