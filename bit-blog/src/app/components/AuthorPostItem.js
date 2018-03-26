import React from 'react'
import { Link } from 'react-router-dom'

export const AuthorPostItem = (props) => {
    const makePosts = () => {
        return props.posts.map((post, i) => {
            return (
                <li key={i}>
                    <Link to={`/singlepost/${post.id}`}>
                        <h5>{post.title}</h5>
                    </Link>
                </li>)
        })
    }

    return (
        <div>
            {makePosts()}
        </div>
    )
}