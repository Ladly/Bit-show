import React from 'react'
import { Link } from 'react-router-dom'

import {AuthorPostList} from './../components/AuthorPostList'
import {SinglePostDetails} from './../components/SinglePostDetails'

 const SinglePostPage = (props) => {

console.log(props.match.params.id)

    return (
        <div className='container'>
            <br/>
            <Link to="/" className="waves-effect waves-light btn">Back</Link>  
            <br/><br/>
            <SinglePostDetails />
            <hr/>
            <AuthorPostList />
        </div>
    )
}

export { SinglePostPage }