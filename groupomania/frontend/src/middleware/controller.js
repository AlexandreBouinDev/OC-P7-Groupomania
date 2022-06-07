import Model from "./model.js"
let model = new Model();

export default class Controller {
    async getPosts() {
        let posts = await model.getPosts()
        return posts
    }

    async getUsers() {
        let users = await model.getUsers()
        return users
    }

    async getComments(postId) {
        let comments = await model.getComments(postId)
        return comments
    }

    addPost(postReq) {
        postReq = { ...postReq, userId: 3, img: null }
        model.addPost(postReq)
    }
    addComment(commentReq) {
        commentReq = { ...commentReq, userId: 3 }
        console.log(commentReq)
        model.addComment(commentReq)
    }
}