const SQLConnect = require("../mySQLconnect");

class CommentManager {
    async getPostComments(postId) {
        return new Promise(
            (resolve, reject) => {
                SQLConnect.query(`SELECT * FROM comment WHERE postId = ${postId}`, function (err, data, fields) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                });
            }
        )
    }
    async addComment(req) {
        let comment = req.body
        return new Promise(
            (resolve, reject) => {

                SQLConnect.query(`INSERT INTO comment (content, userId, postId, creationDate) VALUES ("${comment.content}", ${comment.userId},${comment.postId} , now())`
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



module.exports = CommentManager