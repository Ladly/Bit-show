import React from 'react'

export const AuthorInfo = ({ name, username, email, phone }) => {
    return (
        <div className="row">
            <img className="col s3" src="http://via.placeholder.com/200" alt="frr" />
            <div className="col s9">
                <h2>{name}</h2>
                <h5>username: {username}</h5>
                <h5>email: {}</h5>
                <h5>phone: 1-234-567-899 </h5>
            </div>
        </div>
    )
}