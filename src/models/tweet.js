const firebase = require('../firebase');

class Tweet {
    store(tweet) {
        firebase.firestore().collection("tweets").add(tweet)
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    get(callback) {
        firebase.firestore().collection("tweets").get()
            .then(function (data) {
                callback(undefined, data);
            })
            .catch(function (error) {
                callback(error, undefined)
            });
    }
}

module.exports = Tweet