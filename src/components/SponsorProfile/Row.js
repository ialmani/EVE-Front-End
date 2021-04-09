import React, { Component } from 'react'
import './SponsorProfile.css'

export class Row extends Component {
    render() {
        return (
            <tr className='table-text'>
                <td> 1</td>
                <td> John is the boss this is crazy</td>
                <td> 02/18/2021</td>

                <td><button className='btn-warning btn-sm btnstyle'><span> Edit </span></button>
                    <button data-toggle='modal' data-target='#delete' data-uid='1' class='btn-danger btn-sm btnstyle'><span>Delete</span></button></td>
            </tr>
        )
    }
}

export default Row