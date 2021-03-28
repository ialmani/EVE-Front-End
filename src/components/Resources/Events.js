import React from 'react'
import './Events.css'

const Events = () => {
    return(
        <div class='events-body'>
            <div class='events-container'>
                <div class='events-box'>
                    <div class='events-content'>
                        <h2 class='events-headings'>Live</h2>
                        <h3 class='events-headings2'>Zoom Calls</h3>
                        <p class='events-para'>Come hear to watch live zoom events to learn from our gracious sponsors!!</p>
                        <a href='/liveZoom' class='events-link'>Live Zoom</a>
                    </div>
                </div>
                <div class='events-box'>
                    <div class='events-content'>
                        <h2 class='events-headings'>Cloud</h2>
                        <h3 class='events-headings2'>Recorded Calls</h3>
                        <p class='events-para'>Missed a live call? Come hear to watch the recorded cloud video of it to catch up on what you miss!!</p>
                        <a href='/liveZoom' class='events-link'>Live Zoom</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Events
