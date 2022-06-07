export default class Model {
    getPosts() {
        return fetch("http://localhost:3000/api/posts")
            .then((response) => response.json())
            .then((posts) => {
                return posts;
            })
            .catch(console.error);
    }

    getUsers() {
        return fetch("http://localhost:3000/api/users")
            .then((response) => response.json())
            .then((users) => {
                return users;
            })
            .catch(console.error);
    }

    getComments(postId) {
        return fetch("http://localhost:3000/api/comments/" + postId)
            .then((response) => response.json())
            .then((users) => {
                return users;
            })
            .catch(console.error);
    }

    addPost(postReq) {
        let data = JSON.stringify(postReq);
        return fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
            .catch(console.error);
    }

    addComment(commentReq) {
        let data = JSON.stringify(commentReq);
        return fetch("http://localhost:3000/api/comments", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
            .catch(console.error);
    }
}