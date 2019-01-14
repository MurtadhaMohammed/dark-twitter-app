const firebase = require('../firebase');

class User {

    checkUser(email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (success) {
            callback(success.user, undefined)
        }).catch(function (error) {
            callback(undefined, error)
        });
    }

    createUser(user, callback) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(success => {
                delete user.password;
                user.uid = success.user.uid;
                firebase.firestore().collection('users').doc().set(user)
                    .then(result => {
                        callback({ uid: success.user.uid }, undefined);
                    }).catch(error => {
                        callback(undefined, error);
                    })
            })
            .catch(error => {
                console.error(error)
            });
    }

    find(name,callback) {
        
        firebase.firestore().collection('users').where('name','>=',name).get()
            .then(querySnapshot => {
                querySnapshot.forEach(function(doc) {
                    callback(doc.data(),undefined);
                });
            }).catch(error => {
                callback(undefined,error);
            })
    }

}

module.exports = User