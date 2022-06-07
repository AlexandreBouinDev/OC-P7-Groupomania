const express = require('express');
const router = express.Router();

const userCtrl = require("../controllers/userController")
const postCtrl = require("../controllers/postController")
const commentCtrl = require("../controllers/commentController")


//ROUTES
//users
router.get("/api/users", userCtrl.getUsers)
router.get("/api/users/:id", userCtrl.getUserInfo)

//postsfac
router.get("/api/posts", postCtrl.getPosts)
router.post("/api/posts", postCtrl.addPost)

//comments
router.get("/api/comments/:id", commentCtrl.getComments)
router.post("/api/comments", commentCtrl.addComment)

module.exports = router;