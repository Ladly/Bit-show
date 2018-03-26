import React from 'react'

import { AuthorListItem } from './AuthorListItem'

const AuthorList = (props) => {
    const createList = () => {
        return props.users.map((user, i) => {
            return <AuthorListItem name={user.name} key={i} id={user.id} />
        })
    }

    return (
        <ul className="collection">
            {createList()}
        </ul>
    )
}

export { AuthorList }