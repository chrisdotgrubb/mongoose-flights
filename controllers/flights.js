const Flight = require('../models/flight');

module.exports = {
	index,
	new: newFlight,
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

function newFlight(req, res) {
	res.render('flights/new', { errorMsg: '' });
}