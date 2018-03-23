import React from 'react'

import { SinglePostItem } from './SinglePostItem'

const PostList = (props) => {
    const {posts} = props
    const createItem = () => posts.map((post, i) => <SinglePostItem key={i} post={post}/>)    
    return (
        <ul className="collection"> 
           {createItem()} 
        </ul>
    )
}

export {PostList}
                    