import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { AuthorPostList } from './../components/AuthorPostList'
import { SinglePostDetails } from './../components/SinglePostDetails'
import { fetchService } from './../../services/FetchService'
import { createPostInstances } from './../../shared/utils'

class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.id = props.match.params.id
        this.state = {
            post: null
        }
    }


    fetchSinglePost = (urlID) => {
        fetchService.fetchSinglePost(urlID)
            .then(resp => {
                const { title, userId, body, id } = resp
                return createPostInstances(title, userId, body, id)
            })
            .then(post => this.setState({
                post
            }))
    }

    componentDidMount() {
        this.fetchSinglePost(this.id)
    }

    componentWillReceiveProps(newProps) {
        this.fetchSinglePost(newProps.match.params.id)
    }

    render() {

        if (!this.state.post) {
            return <h3>Loading...</h3>
        }

        return (
            <div className='container'>
                <br />
                <Link to="/" className="waves-effect waves-light btn">Back</Link>
                <br /><br />
                <SinglePostDetails post={this.state.post} />
                <hr />
                <AuthorPostList authorId={this.state.post.authorId} />
            </div>
        )
    }
}

export { SinglePostPage }