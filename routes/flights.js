var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');


//		'/flights'

router.get('/new', flightsController.new);
router.get('/', flightsController.index);

router.post('/', flightsController.create);

module.exports = router;
