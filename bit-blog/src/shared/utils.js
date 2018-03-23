import { Post } from './../entities/Post'

export const createPostInstances = (title, authorId, details, postId) => {
    return new Post(title, authorId, details, postId)
}                                                                         