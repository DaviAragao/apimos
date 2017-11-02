'use strict';
const db = require('../../db');

const getResult = (error = null, data = null) => {
	let result = {};
	result.error = error;
	result.data = data;
	return result;
};

const now = () => new Date().toLocaleString();

exports.getNextPrime = (req, res) => {
	const ref = db.conn.database().ref();
	ref.orderByChild("calc").equalTo(0).limitToFirst(1).once('value')
		.then(data => {
			const nextPrime = Object.keys(data.val())[0];
			const nextPrimeRef = ref.child(nextPrime);
			nextPrimeRef.update({
				"calc": 1,
				"dtStart": now()
			})
			.then(response => res.json(getResult(null, {"nextPrime": nextPrime})))
			.catch(error => res.json(getResult(error)));
			
		})
		.catch(error => res.json(getResult(error)));
};

exports.updatePrime = (req, res) => {
	const ref = db.conn.database().ref(req.params.primeId);
	ref.once('value')
		.then(data => {
			const primeToUpdate = data.val();
			if(primeToUpdate){
				req.body.dtEnd = now();
				ref.update(req.body)
					.then(response => res.json(getResult()))
					.catch(error => res.json(getResult(error)));
			}
			else{
				res.json(getResult('Erro, primo inexistente.'));
			}
			
		})
		.catch(error => res.json(getResult(error)));
};
