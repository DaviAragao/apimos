'use strict';
module.exports = app => {
	const ctrlPrime = require('../controllers/primosController');

	app.route('/prime').get(ctrlPrime.getNextPrime);
	app.route('/prime/:primeId').get(ctrlPrime.getPrimeState);
	app.route('/prime/:primeId').put(ctrlPrime.updatePrime);

	app.route('/getLastMersenne').get(ctrlPrime.getLastMersenne);
	app.route('/getLastCalculating').get(ctrlPrime.getLastCalc);
	app.route('/getLastCalculated').get(ctrlPrime.getLastCalc);
	app.route('/calcMersenne/:prime').get(ctrlPrime.calcMersenne);
};
