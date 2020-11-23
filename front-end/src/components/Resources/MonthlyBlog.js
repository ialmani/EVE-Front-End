import React, {useEffect, useState} from 'react'

import './card-style.css'

import * as Requests from '../../Requests'



const MonthlyBlog =  ()  => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        Requests.getBlogs().then(data=>{
            if(data.statusCode !== 404) {
                setBlogs(data)
            }
        }).catch(() => null);
    },[]);


    return (
        <div>
        {blogs.map(blog=>

                <div className = 'card text-center'>
                    <div className = 'card-body text-dark'>
                        <h4 className = 'card-title'>{blog.title}</h4>
                        <p className = 'card-text text-secondary'>{(blog.content).substring(0,100)}...</p>
                        <a href = '#' className = 'btn btn-outline-success' >Read More</a>
                    </div>
                </div>

            )
        }
        
        </div>

    )
}

export default MonthlyBlog
