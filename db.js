var firebase = require('firebase-admin');

var serviceAccount = require("./firebaseKey.json");

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: "https://primos-23a93.firebaseio.com"
});

exports.conn = firebase;
