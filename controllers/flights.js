const { default: mongoose } = require('mongoose');
const Flight = require('../models/flight');

module.exports = {
	index,
	show,
	new: newFlight,
	create,
}

async function index(req, res) {
	try {
		const flights = await Flight.find({});
		res.render('flights/index', {
			flights,
		});
	} catch (err) {
		res.render('error', {
			error: err,
			message: err.message,});
	};
}

async function show(req, res) {
	try {
		const id = req.params.id;
		const flight = await Flight.findById(id);
		res.render('flights/show', {
			flight,
		});
	} catch (err) {
		res.render('error', {
			error: err,
			message: err.message,});
	};
}

function newFlight(req, res) {
	const airlineChoices = Flight.schema.path('airline').enumValues;
	const airportChoices = Flight.schema.path('airport').enumValues;

	// default is one year from today formatted for html: 2023-06-16T20:22:49
	const today = new Date()
	today.setFullYear(today.getFullYear() + 1)
	defaultDeparture = today.toISOString().slice(0, 19);
	
	res.render('flights/new', {
		errorMsg: '',
		airlineChoices,
		airportChoices,
		today,
		defaultDeparture,
	});
}

async function create(req, res) {
	for (const key in req.body) {
		if (req.body[key] === '') delete req.body[key];
	};

	try {
		await Flight.create(req.body);
		res.redirect('/flights');
	} catch (err) {
		const airlineChoices = Flight.schema.path('airline').enumValues;
		const airportChoices = Flight.schema.path('airport').enumValues;
		res.render('flights/new', {
			errorMsg: err.message,
			airlineChoices,
			airportChoices,
		});
	};
}