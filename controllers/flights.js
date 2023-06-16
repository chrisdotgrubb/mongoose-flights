const Flight = require('../models/flight');

module.exports = {
	index,
}

async function index(req, res) {
	try {
		const flights = await Flight.find({});
		res.render('flights/index', {
			flights,
		});
	} catch (err) {
		res.render('/', { errorMsg: err.message });
	};
}