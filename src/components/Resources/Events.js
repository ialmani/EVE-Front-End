import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Events.css";

class Events extends Component {
    render() {
        return (
            <div class="events-body">
                <div class="events-container">
                    <h1>Want to learn more about topics related to your venture? Join some of our live zoom calls!</h1>
                    <p class="text"> Our sponsors are very gengerous to hold live and recorded zoom meetings to dicuss a multitude of topics that might answer some question you could have.</p>
                    <Link to='/zoomeve' class="events-zoombutton">
                        Zoom<span>&rarr;</span>
                    </Link>
                </div>
            </div>
        );
    }

}

export default Events;