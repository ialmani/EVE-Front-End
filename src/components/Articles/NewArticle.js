import React from 'react'
import './NewArticle.css'

const NewArticle = () => {
  return (
  
    <div className = "article-wrapper">
        <div className = "title"> 
          Post a new article

        </div>
        <div className = "form">
            <div className = "input-field">
              <label>Topic</label>
              <input type = "text" className = "input"/>
            </div>
            <div className = "input-field">
              <label>Title</label>
              <input type = "text" className = "input"/>
            </div>
            <div className = "input-field">
              <label>Description</label>
              <textarea className = "text-area" placeHolder="content" rows="10" cols="30"required/>
            </div>
            <div className = "input-field">
              <label>Author</label>
              <input type = "text" className = "input"/>
            </div>
            <div className = "upload-img">
            <input type = 'file' name = 'file' onChange = {(e) => this.onChange(e)}/>
            </div>
            <div className = "datee">
            <input type ="date"  size="39" required></input> <br/> <br/>
            <button className="btn">Upload post <span class="fas fa-upload"></span></button>
            </div>
        </div>
      
    </div>
  )
}

export default NewArticle
