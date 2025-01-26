const posts = require('../data.js')

const getPosts = (req, res) => {
    res.json(posts)
}

const getPost = (req, res) => {
    const id = Number(req.params.postId)
    const post = posts.find(post => post.id === id)

    if (!post) {
        return res.status(404).send('Post not found')
    }
    res.json(post)
}

const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    }
    posts.push(newPost)
    res.status(201).json(newPost)
}

const updatePost = (req, res) => {
    const id = Number(req.params.postID)
    const index = posts.findIndex(post => post.id === id)
    const updatedPost = {
        id: posts[index].id,
        title: req.body.title,
        content: req.body.content
    }

    posts[index] = updatedPost
    res.status(200).json('Post updated')
}

const deletePost = (req, res) => {
    const id = Number(req.params.postId)
    const index = posts.findIndex(post => post.id === id)
    posts.splice(index, 1)
    res.status(200).json('Post deleted')
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}