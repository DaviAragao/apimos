var admin = require("firebase");

var serviceAccount = require("primos-23a93-firebase-adminsdk-zkdtf-95b72f7641.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://primos-23a93.firebaseio.com"
});

firebase.database().ref('/').set({
	username: "test",
	email: "test@mail.com"
});
