const PostManager = require("../managers/PostManager")

exports.getPosts = (req, res, next) => {
    let postManager = new PostManager
    postManager.getAllPosts()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

exports.addPost = (req, res, next) => {
    let postManager = new PostManager
    postManager.addPost(req)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}
