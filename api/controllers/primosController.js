'use strict';
const db = require('../../db');
const ref = db.conn.database().ref();

exports.getNextPrimo = (req, res) => {
	ref.orderByChild("calc").equalTo(0).limitToFirst(1).once('value')
		.then(data => {
			const nextPrimo = Object.keys(data.val())[0];
			ref.child(nextPrimo).update({
				"calc": 1
			});
			res.json({"nextPrimo": nextPrimo});
		})
		.catch(error => {
			res.json(error);
		});
};

exports.updatePrimo = (req, res) => {
	res.json({
		"method": "updatePrimo",
	});
};
