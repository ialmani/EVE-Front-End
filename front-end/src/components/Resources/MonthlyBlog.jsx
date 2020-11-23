import React from 'react'
import aboutImg from '../../images/about.svg'
import './card-style.css'
const MonthlyBlog =  props  => {
    return (
        <div className = 'card text-center'>
            <div className = 'overflow'>
                <img src = {aboutImg} alt = 'laptop' className = 'card-img-top'/>
            </div>
            <div className = 'card-body text-dark'>
                <h4 className = 'card-title'>Card Title</h4>
                <p className = 'card-text text-secondary'>Lorem20 blah blah content</p>
                <a href = '#' className = 'btn btn-outline-success' >Go Anywhere</a>
            </div>
            
        </div>
    )
}

export default MonthlyBlog
