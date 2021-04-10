import React from 'react'
import './Events.css'

const Events = () => {
    return (
        <div class='events-body'>
            <div class='events-container'>
                <div class='events-box'>
                    <div class='events-content'>
                        <h2 class='events-headings font-roboto'>Live</h2>
                        <h3 class='events-headings2 font-roboto'>Zoom Calls</h3>
                        <p class='events-para font-roboto'>Come hear to watch live zoom events to learn from our gracious sponsors!!</p>
                        <a href='/events/zoom' class='events-link font-roboto'>Live Zoom</a>
                    </div>
                </div>
                <div class='events-box'>
                    <div class='events-content'>
                        <h2 class='events-headings font-roboto'>Cloud</h2>
                        <h3 class='events-headings2 font-roboto'>Recorded Calls</h3>
                        <p class='events-para font-roboto'>Missed a live call? Come hear to watch the recorded cloud video of it to catch up on what you miss!!</p>
                        <a href='' class='events-link font-roboto'>Recorded Zoom</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events