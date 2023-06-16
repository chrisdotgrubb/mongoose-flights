const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
	airline: {
		type: String,
		enum: ['American', 'Southwest', 'United'],
	},
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
		default: 'DEN',
	},
	flightNo: {
		type: Number,
		minimum: 10,
		maximum: 9999
	},
	departs: {
		type: Date,
		default: () => {
			const today = new Date();
			today.setFullYear(today.getFullYear() + 1);
			return today;
		},
	},
}, {
	timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);