import React from 'react'
import { PostList } from './../components/PostList'
import { fetchService } from './../../services/FetchService'
import { createPostInstances } from './../../shared/utils'


class HomePage extends React.Component {
    state = {
        posts: [],
    }

    fetchPosts = () => {
        fetchService.fetchPosts()
        .then( response => {
            return response.map(resp => {
                const {title, userId, body, id} = resp;
                return createPostInstances(title, userId, body, id)
            })
        })
        .then (posts => posts.slice(0,10))
        .then(postsData => {
            this.setState({ posts: postsData })
        })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div className="container">
            <h2 className="center-align">Posts</h2>
                <PostList posts={this.state.posts}/>
            </div>
        )
    }
}

export { HomePage }