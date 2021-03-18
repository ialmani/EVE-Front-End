import React from 'react'
import Row from './Row'
import DeleteModal from './DeleteModal'

const UserArticles = () => {
    return (
        <div className = "profile-articles tab">
        <h1 className = "sp-h1">Your Articles</h1>
                            
        <div className="table-container">
        <div className="row toprow">
        <table className="table table-hover table-responsive">
        <thead>
            <tr>
                <th className = "t-header">ID</th>
                <th className = "t-header">Title</th>
                <th className = "t-header" >Date</th>

            </tr>
        </thead>

        <tbody>
        <Row/>

        </tbody>
        </table>
        </div>
        </div>



        <DeleteModal/>
        </div>
    )
}

export default UserArticles



