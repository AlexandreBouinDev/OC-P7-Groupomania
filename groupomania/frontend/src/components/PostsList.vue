<script>
import CommentsList from "./CommentsList";
import Controller from "../middleware/controller.js";
import NewComment from "./NewComment";
let controller = new Controller();

export default {
    components: {
        CommentsList,
        NewComment,
    },
    data() {
        return {
            posts: [],
            xPosts: [],
            xUsers: [],
        };
    },
    async mounted() {
        this.posts = await controller.getPosts();
        this.xPosts = await this.sortPosts(this.posts);
        this.xUsers = await controller.getUsers();
    },
    methods: {
        getUserName(idUser) {
            let user = this.xUsers.find((user) => user.id === idUser);
            let name = "";
            if (user) {
                name = `${user.firstname} ${user.lastname}`;
                return name;
            }
            return "Anonymous";
        },
        formatDate(sqlDate) {
            let jsDate = sqlDate.slice(0, 10);
            return jsDate;
        },
        sortPosts(posts) {
            return (posts = posts.sort((a, b) => b.id - a.id));
        },
    },
};
</script>

<template>
    <div v-for="post in xPosts" :key="post.id" class="post" id="PostsList">
        <div class="post-content">
            <div>
                <div class="post-header">
                    <h2 class="post-title">{{ post.title }}</h2>
                    <h3 class="post-user">{{ getUserName(post.userId) }}</h3>
                </div>
                <p class="post-date">{{ formatDate(post.creationDate) }}</p>
            </div>
            <p class="post-message">{{ post.content }}</p>
        </div>

        <div class="comment-section">
            <CommentsList v-bind:postId="post.id" />
            <NewComment v-bind:postId="post.id" />
        </div>
    </div>
</template>
