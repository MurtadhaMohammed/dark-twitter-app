const firebase = require('../firebase');

class Comment {
    store(comment) {
        firebase.firestore().collection("comments").add(comment)
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    get(tweetId,callback) {
        firebase.firestore().collection("comments").where('tweetId','==',tweetId).get()
            .then(function (data) {
                callback(undefined, data);
            })
            .catch(function (error) {
                callback(error, undefined)
            });
    }
}

module.exports = Comment