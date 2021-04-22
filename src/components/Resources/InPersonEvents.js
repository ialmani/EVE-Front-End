import React from 'react'
import './ZoomEvents.css'

const InPersonEvents = () => {
    return (
        <div className = "zoom-body">
            <div className = "zoom-heading"> Welcome to our In-Person Events!!</div>


          <div className="card mb-4 zoomcard">
            <div className="card-body">
              <h5 className="zoom-title">Hello World</h5>
              <p className="zoom-date"> DATE</p>
              <p className="zoom-time"> TIME</p>

                <a className="btn btn-danger zoom-btn">Join Meeting</a>

            </div>
          </div>


        </div>
    )
}

export default InPersonEvents