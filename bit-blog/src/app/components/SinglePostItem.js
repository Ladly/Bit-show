import React from 'react' 
import { Link } from 'react-router-dom'

export const SinglePostItem = ({post}) => {
    console.log(post)
    return (
        <li className="collection-item">
            <Link to={`/singlepost/${post.postId}`}>
                <h4>{post.title}</h4>
                <p>{post.details}</p>
            </Link>
        </li>
    )
}