import React, { useEffect, useState } from 'react'
import './FullVideo.css'
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom"
import * as Requests from '../../Requests'
import profilePic from '../../assets/profilepic.png'
import BackButton from '../BackButton'

export const FullVideo = () => {

    const [video, setVideo] = useState([]);
    let { id } = useParams();

    useEffect(() => {

        Requests.getVideo(id).then(data => {
            if (data.statusCode !== 404) {
                setVideo(data)

            }
        }).catch((err) => console.log(err));
    });

    return (
        <div className='full-vid-body'>
            <BackButton/>
            <div className='full-vid-container'>
                <ReactPlayer className='react-player' url={video.video_url} fluid={false} controls={false} />
            </div>
            <div className='full-v-textbox'>
                <h1 className='full-v-h'>{video.title}</h1>
                <p className='full-v-desc'>{video.description}</p>
            </div>
            <div className='v-comments-container'>
                <div className='row bootstrap snippets bootdeys'>
                    <div className='col-md-8 col-sm-12'>
                        <div className='comment-wrapper'>
                            <div className='panel panel-info'>
                                <div className='panel-heading'>
                                </div>
                                <div className='panel-body'>
                                    <textarea className='form-control' placeholder='write a comment...' rows='3'></textarea>
                                    <br />
                                    <button type='button' className='btn btn-info pull-right'>Post</button>
                                    <div className='clearfix'></div>
                                    <hr />
                                    <ul className='media-list'>
                                        <li className='media'>
                                            <a href='#' className='pull-left'>
                                                <img src={profilePic} />
                                            </a>
                                            <div className='media-body'>
                                                {/* <span className="text-muted pull-right">
                                                <small className="text-muted">30 min ago</small>
                                                </span> */}
                                                <strong className='text-success'>@MartinoMont</strong>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Lorem ipsum dolor sit amet.
                                                    </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullVideo