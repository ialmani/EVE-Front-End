import React from 'react'
import './FullVideo.css'
import ReactPlayer from  'react-player'


export const FullVideo = () => (
    <div className = "full-vid-body">
        <div className = "backg">
            <div className = "full-vid-container">
                <ReactPlayer url = "https://www.youtube.com/watch?v=zTitoHKsyJg" fluid = {false}controls = {false} />
            </div>
        
        <div className = "box">
            <div className = "text">
            <h1> Title</h1>
            <h3> Description</h3>
            </div>
        </div>
        </div>
    </div>
)

export default FullVideo
 