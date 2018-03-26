import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchService } from './../../services/FetchService'

class AuthorName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: ""
        }
    }

    componentDidMount = () => {
        this.fetchAuthor(this.props.authorId)
    }

    fetchAuthor = (authorId) => {
        fetchService.fetchSingleUser(authorId)
            .then(author => this.setState({ author }))
    }

    render() {

        return (
            <Link to={`/singleauthor/${this.props.authorId}`}>
                <h5>{this.state.author.name}</h5>
            </Link>
        )
    }
}

export { AuthorName }