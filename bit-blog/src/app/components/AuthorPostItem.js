import React from 'react' 
import { Link } from 'react-router-dom'

export const AuthorPostItem = () => {
    return (
        <li>
            <Link to="/singlepost">
                <h5>Title 2 - Pellentesque sed consequat leo. Duis erat tortor...</h5>
            </Link>
        </li>
    )
}