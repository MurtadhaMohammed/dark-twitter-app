var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCoMibgkLEs690iAuwgqfjizNYaR9Y453E",
    authDomain: "dark-twitter.firebaseapp.com",
    databaseURL: "https://dark-twitter.firebaseio.com",
    projectId: "dark-twitter",
    storageBucket: "dark-twitter.appspot.com",
    messagingSenderId: "760274751219"
};
firebase.initializeApp(config);
const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);

/*firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
      console.log(user)
    }
});

console.log(firebase.auth().currentUser)*/

module.exports = firebase