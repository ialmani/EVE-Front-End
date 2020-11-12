import React from 'react';
import './Home.css';
import {HomeItems} from './HomeItems';


export const Home = () => {

    return (
        <div className = 'Home-Layout'>
            <h1 className = 'home-logo'> <i className = 'fab fa-react'>EVE</i></h1>
            <p>Bringing Key Resources To Entrepreneurs</p> 

            {HomeItems.map((item, index) => {
                        return (
                            <div key = {index}>
                            <div className = {item.cName} p = {item.paragraph}>
                            </div>
                            </div>

                        )
                    })}         
        </div>

    ) 
                   
}

export default Home;






