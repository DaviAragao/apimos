'use strict';
const db = require('../../db');

const getResult = (error = null, data = null) => {
	let result = {};
	result.error = error;
	result.data = data;
	return result;
};

const now = () => new Date().toLocaleString();

const addPrime = rootRef => {
	getLastPrime(rootRef)
		.then(prime => {
			let newPrimeObject = new Object();
			let nextPrime = calcNextPrime(prime);
			newPrimeObject[nextPrime] = {
				'calc': 0
			};
			rootRef.update(newPrimeObject);
		})
		.catch(error => console.error(error));
};

const getLastPrime = rootRef => {
	return new Promise((resolve, reject) => {
		rootRef.limitToLast(1).once('value')
			.then(data => resolve(Number(extractPrimeFromJson(data.val()))))
			.catch(error => reject(error));
	});
};

const calcNextPrime = currentLastPrime => {
	let candidate = currentLastPrime + 2;
	while (!isPrime(candidate))
		candidate += 2;

	return candidate;
};

const isPrime = number => {
	const sqrt = Math.sqrt(number);
	let start = 2;

	while (start <= sqrt)
		if (number % start++ < 1)
			return false;

	return number > 1;
};

const extractPrimeFromJson = json => Object.keys(json)[0];

exports.getNextPrime = (req, res) => {
	const ref = db.conn.database().ref();
	ref.orderByChild("calc").equalTo(0).limitToFirst(1).once('value')
		.then(data => {
			const nextPrime = extractPrimeFromJson(data.val());
			const nextPrimeRef = ref.child(nextPrime);
			nextPrimeRef.update({
				"calc": 1,
				"dtStart": now()
			})
			.then(response => res.json(getResult(null, {"nextPrime": nextPrime})))
			.catch(error => res.json(getResult(error)));
			
		})
		.catch(error => res.json(getResult(error)));
		addPrime(ref);
};

exports.updatePrime = (req, res) => {
	const ref = db.conn.database().ref(req.params.primeId);
	ref.once('value')
		.then(data => {
			const primeToUpdate = data.val();
			if(primeToUpdate){
				req.body.dtEnd = now();
				ref.update(req.body)
					.then(response => res.json(getResult(null, req.body)))
					.catch(error => res.json(getResult(null, null)));
			}
			else{
				res.json(getResult('Erro, primo inexistente.'));
			}
			
		})
		.catch(error => res.json(getResult(error)));
};

exports.getLastMersenne = (req, res) => {
	const ref = db.conn.database().ref();
	ref.orderByChild("mersenne").equalTo(1).limitToLast(1).once('value')
		.then(data => {
			const lastMersenne = extractPrimeFromJson(data.val());
			res.json(getResult(null, lastMersenne));
		})
		.catch(error => res.json(getResult(error)));
};

exports.calcMersenne = (req, res) => {
	const mersenneNumber = Math.pow(2, req.params.prime) - 1;
	res.json(getResult(null, bigNum(2).pow(req.params.prime).minus(1)));
};
