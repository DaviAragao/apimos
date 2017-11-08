'use strict';
module.exports = app => {
	const ctrlPrime = require('../controllers/primosController');

	app.route('/prime').get(ctrlPrime.getNextPrime);
	app.route('/prime/:primeId').get(ctrlPrime.getPrimeState);
	app.route('/prime/:primeId').put(ctrlPrime.updatePrime);

	/*
	 * Rotas auxiliares.
	 * */
	app.route('/prime/getLastMersenne').get(ctrlPrime.getLastMersenne);
	app.route('/prime/getLastCalculating').get(ctrlPrime.getLastCalc);
	app.route('/prime/getLastCalculated').get(ctrlPrime.getLastCalc);
	app.route('/prime/calcMersenne/:prime').get(ctrlPrime.calcMersenne);
};
