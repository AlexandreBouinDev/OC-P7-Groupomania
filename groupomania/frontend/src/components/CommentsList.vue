<script>
import Controller from "../middleware/controller.js";
let controller = new Controller();

export default {
    props: {
        postId: Number,
    },
    data() {
        return {
            xComments: [],
            xUsers: [],
        };
    },
    async mounted() {
        this.xComments = await controller.getComments(this.postId);
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
    },
};
</script>

<template>
    <div
        v-for="comment in xComments"
        :key="comment.id"
        class="comments"
        id="CommentsList"
    >
        <div class="comment-content">
            <div class="comment-header">
                <h3 class="comment-user">{{ getUserName(comment.userId) }}</h3>
                <p class="comment-date">
                    {{ formatDate(comment.creationDate) }}
                </p>
            </div>
            <p class="comment-message">{{ comment.content }}</p>
        </div>
    </div>
</template>
