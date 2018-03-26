import React from 'react'

import { AuthorName } from './AuthorName'

const SinglePostDetails = ({ post }) => {
    return (
        <div className="row center-align">
            <h2>{post.title}</h2>
            <AuthorName authorId={post.authorId} />
            <h5>{post.details}</h5>
        </div>
    )
}

export { SinglePostDetails }