import React from 'react'

import { AuthorPostItem } from './AuthorPostItem'

const AuthorPostList = () => {
    return (
        <React.Fragment>
            <h4>3 more posts from same author</h4>
            <ul>
                <AuthorPostItem />
                <AuthorPostItem />
                <AuthorPostItem />
            </ul>
        </React.Fragment>
    )
}

export {AuthorPostList}