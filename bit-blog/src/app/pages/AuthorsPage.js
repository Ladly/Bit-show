import React from 'react'

import { AuthorList } from './../components/AuthorList'

class AuthorsPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="container">
            <h2 className="center-align">AUTHORS (9)</h2>
            <AuthorList />
            </div>
        )
    }
}

export {AuthorsPage}