'use strict';
module.exports = app => {
	const ctrlPrime = require('../controllers/primosController');

	app.route('/prime').get(ctrlPrime.getNextPrime);
	app.route('/prime/:primeId').put(ctrlPrime.updatePrime);
};
