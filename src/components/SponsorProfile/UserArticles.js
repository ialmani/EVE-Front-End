import React, {useEffect, useState} from 'react'
import Row from './Row'
import DeleteModal from './DeleteModal'
import {useParams} from "react-router-dom";
import * as Requests from "../../Requests";

const UserArticles = (props) => {



    return (
        <div className='profile-articles tab'>
            <h1 className='sp-h1'>Your Articles</h1>
            <div className='table-container'>
                <div className='row toprow'>
                    <table className='table table-hover table-responsive'>
                        <thead>
                            <tr>
                                <th className='t-header'>ID</th>
                                <th className='t-header'>Title</th>
                                <th className='t-header' >Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.articles.map(article =>
                            <Row/>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteModal />
        </div>
    )
}

export default UserArticles