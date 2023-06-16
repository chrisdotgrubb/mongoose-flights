const Flight = require('../models/flight');

module.exports = {
	index,
	new: newFlight,
	create
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

async function create(req, res) {
	console.log(req.body);
	// req.body.flightNo = parseInt(req.body.flightNo);
	
	
	// delete keys that have no value to force defaults
	for (const key in req.body) {
		if (req.body[key] === '') delete req.body[key];
	};

	try {
		await Flight.create(req.body);
		res.redirect('/flights');
	} catch (err) {
		res.render('flights/new', {errorMsg: err.message});
	};
}