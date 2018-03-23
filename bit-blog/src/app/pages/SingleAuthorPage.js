import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorInfo } from './../components/AuthorInfo'
import { AuthorAddress } from './../components/AuthorAddress'
import { AuthorCompany } from './../components/AuthorCompany'


export const SingleAuthorPage = () => {
    return (
        <div className="container">
            <br/>
            <Link className="waves-effect waves-light btn" to="singlepost">Back</Link>  
            <br/><br/>
            <AuthorInfo />
            <hr />
            <AuthorAddress />
            <hr />
            <AuthorCompany />
        </div>
     
    )
}