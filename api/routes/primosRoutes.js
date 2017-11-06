'use strict';
module.exports = app => {
	const ctrlPrime = require('../controllers/primosController');

	app.route('/prime').get(ctrlPrime.getNextPrime);
	app.route('/prime/:primeId').put(ctrlPrime.updatePrime);

	app.route('/prime/getLastMersenne').get(ctrlPrime.getLastMersenne);
	app.route('/prime/calcMersenne/:prime').get(ctrlPrime.calcMersenne);
	//app.route('/prime/cleanAll').get(ctrlPrime.cleanAll);
};
