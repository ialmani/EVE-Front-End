import React from 'react'
import './SponsorProfile.css'
import DeleteModal from './DeleteModal'
import Play from '../../assets/pic3.png'

const UserVideos = () => {
    return (
        <div className = "profile-videos tab">
        <h1 className = "sp-h1">Your Videos</h1>
        <div className="table-video-container">
        <div className="row toprow">
        <table className="table table-hover table-responsive">
        <thead>
            <tr>
                <th className = "t-header">ID</th>
                <th className = "t-header">Thumbnail</th>
                <th className = "t-header">Title</th>
                <th className = "t-header" >Date</th>
                

            </tr>
        </thead>

        <tbody>
        <tr className = "table-video-text">
            <td className = "table-video-text"> 1</td>
            <td><img  src = {Play} ></img></td>
            <td> John is the boss this is crazy</td>
            <td> 02/18/2021</td>
            
         
            <td><button className="btn-warning btn-sm btnstyle"><span> Edit </span></button>
            <button  data-toggle="modal" data-target="#delete" data-uid="1" class="btn-danger btn-sm btnstyle"><span>Delete</span></button></td>
        </tr> 

        </tbody>
        </table>
        </div>
        </div>
        <DeleteModal/>
        </div>
    )
}

export default UserVideos
