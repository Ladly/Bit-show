import React, { Component } from 'react'

import { AuthorPostItem } from './AuthorPostItem'
import { fetchService } from './../../services/FetchService'

class AuthorPostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }

    fetchAuthorPosts = () => {
        fetchService.fetchUserPosts(this.props.authorId)
            .then(post => post.slice(0, 3))
            .then(firstThreePosts => {
                this.setState({ posts: firstThreePosts })
            })
    }

    componentDidMount() {
        this.fetchAuthorPosts()
    }



    render() {

        if (!this.state.posts) {
            return (<h3>loading</h3>)
        }

        return (
            <React.Fragment>
                <h4>3 more posts from same author</h4>
                <ul>
                    <AuthorPostItem posts={this.state.posts} />
                </ul>
            </React.Fragment >
        )
    }
}

export { AuthorPostList }