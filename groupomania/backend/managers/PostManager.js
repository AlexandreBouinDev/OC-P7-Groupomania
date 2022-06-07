const SQLConnect = require("../mySQLconnect");

class PostManager {
    async getAllPosts() {
        return new Promise(
            (resolve, reject) => {

                SQLConnect.query('SELECT * FROM post', function (err, data, fields) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                });
            }
        )
    }


    async addPost(req) {
        let post = req.body
        return new Promise(
            (resolve, reject) => {

                SQLConnect.query(`INSERT INTO post (content, title, userId, img, creationDate) VALUES ("${post.content}", "${post.title}", ${post.userId}, "${post.img}", now())`
                    , function (err, data, fields) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(data)
                        }
                    });
            }
        )
    }
}

module.exports = PostManager