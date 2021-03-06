import React from 'react'
import './Events.css'
import BackButton from '../BackButton'

const Events = () => {
    return (
        <div class='events-body'>
            <BackButton/>
            <div class='events-container'>
                <div class='events-box'>
                    <div class='events-content'>
                        <h2 class='events-headings font-roboto'>Live</h2>
                        <h3 class='events-headings2 font-roboto'>In-Person Events</h3>
                        <p class='events-para font-roboto'>Come here to see what in-person events are available to gain that face to face experience!!</p>
                        <a href='/events/inPersonEvents' class='events-link font-roboto'>In-Person Events</a>
                    </div>
                </div>
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