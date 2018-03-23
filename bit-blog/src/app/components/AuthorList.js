import React from 'react'

import { AuthorListItem } from './AuthorListItem'

const AuthorList = () => {
    return (
        <ul className="collection">
            <AuthorListItem />
            <AuthorListItem />
            <AuthorListItem />
            <AuthorListItem />
            <AuthorListItem />
            <AuthorListItem />
        </ul>
    )
}

export {AuthorList}