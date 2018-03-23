import React from 'react'

export const AuthorInfo = () => {
    return (
        <div className="row">
            <img  className="col s3" src="http://via.placeholder.com/200" alt="frr"/>
            <div className="col s9">
                <h2>Name Surname</h2>
                <h5>username: cool_username </h5>
                <h5>email: cool_emal@somemail.com</h5>
                <h5>phone: 1-234-567-899 </h5>
            </div>
        </div>
    )
}