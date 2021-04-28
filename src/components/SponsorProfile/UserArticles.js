import React, {useEffect, useState} from 'react'
import Row from './Row'
import DeleteModal from './DeleteModal'
import {useParams} from "react-router-dom";
import * as Requests from "../../Requests";

const UserArticles = (props) => {

    let userID = props.user;
    let filteredArticles = props.articles.filter(article => article.user_id === userID);

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
                                <th className='t-header' >Author</th>
                            </tr>
                        </thead>
                        <tbody>
                        {filteredArticles.map(article =>
                            <tr className='table-text'>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>{article.author}</td>

                                <td>
                                    <button data-toggle='modal' data-target='#delete' data-uid='1'
                                            className='btn-danger btn-sm btnstyle'><span>Delete</span></button>
                                </td>
                            </tr>
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