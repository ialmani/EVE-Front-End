import React, {useState} from 'react'
import './NewArticle.css'
import * as Requests from "../../Requests";

import { useHistory } from "react-router-dom";

const NewArticle = () => {
    const [newArticle, setNewArticle] = useState({
        title: null,
        author: null,
        content:null
    });

    let history = useHistory();

    const createArticle = e => {
        e.preventDefault();
        Requests.createArticle(newArticle).then((response) => {
            console.log(response.id)
            history.push('/articles/'+response.id);


        }).catch(status=>
            alert(status));
    }



  return (

  
    <div className = "article-wrapper">
        <div className = "title"> 
          Post a new article

        </div>
        <form className = "form" onSubmit={createArticle}>

            <div className = "input-field">
              <label>Title</label>
              <input type = "text" className = "input" onChange={e=>setNewArticle({...newArticle, title:e.target.value})}/>
            </div>
            <div className = "input-field">
                <label>Author</label>
                <input type = "text" className = "input" onChange={e=>setNewArticle({...newArticle, author:e.target.value})}/>
            </div>
            <div className = "input-field">
              <label>Content</label>
                <textarea
                       className="input"
                       onChange={e=>setNewArticle({...newArticle, content:e.target.value})}
                />

            </div>

            <input type='submit' className="btn" />

        </form>
      
    </div>
  )
}

export default NewArticle
