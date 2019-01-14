let Comment = require('../models/comment');
const Joi = require('joi');

class commentController {
    constructor() {
        this.comment = new Comment;
    }

    createComment(comment) {
        const commentSchema = Joi.object().keys({
            comment: Joi.string().required().min(3),
            tweetId: Joi.required(),
            uid: Joi.required()
        });

        Joi.validate({
            comment: comment.comment,
            tweetId: comment.tweetId,
            uid: comment.uid,
        }, commentSchema, (error, comment) => {
            this.comment.store(comment)
        })
    }

    showComments(tweetId) {
        this.comment.get(tweetId,(error,comments)=>{
            if(!error){
                let count = 0
                comments.forEach(function (doc) {
                    count ++ 
                    console.log(count +"\t"+ doc.data().comment)
                });
                console.log("\n")
            }
        })
    }
}


module.exports = commentController

