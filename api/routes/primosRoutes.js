'use strict';
module.exports = app => {
	var primos = require('../controllers/primosController');

	app.route('/primo').get(primos.getNextPrimo);
	app.route('/primo/:primoID').put(primos.updatePrimo);
};
