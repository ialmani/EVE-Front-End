import React from 'react'
import './MonthlyBlogs.css'


const MonthlyBlogs = () => {
    return (
    <>
    <body>
    <form className = 'create-post'>
      <h1>Create New Post</h1>
      <input type ="text" placeHolder="Author Name" size="39" required></input> <br/><br/>
      
      <input type ="text" placeHolder="title" size="39" required></input>
      <br />
      <br />
      <textarea placeHolder="content" rows="20" cols="60"required></textarea>
      <br />
      <br />
      <input type ="date"  size="39" required></input> <br/> <br/>
      <button className="btn">Upload post <span class="fas fa-upload"></span></button>
    </form>
    </body>

    </>
  )
};
export default MonthlyBlogs;
