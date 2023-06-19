const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
	},
	arrival: {
		type: Date,
	}
});

const flightSchema = new Schema({
	airline: {
		type: String,
		enum: ['American', 'Southwest', 'United'],
	},
	// origin airport
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
		default: 'DEN',
	},
	flightNo: {
		type: Number,
		min: 10,
		max: 9999
	},
	departs: {
		type: Date,
		default: () => {
			const today = new Date();
			today.setFullYear(today.getFullYear() + 1);
			return today;
		},
	},
	destinations: [destinationSchema],
}, {
	timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);