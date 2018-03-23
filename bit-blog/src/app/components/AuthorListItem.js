import React from 'react'
import { Link } from 'react-router-dom'

export const AuthorListItem = () => {
    return (
        <li className="collection-item">
            <Link to="/singleauthor">
                <h4>Name Surname 2</h4>
            </Link>
        </li>
    )
}