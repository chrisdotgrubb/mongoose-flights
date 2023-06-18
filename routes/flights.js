var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');


//		'/flights'

router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.get('/:id/edit', flightsController.edit);
router.get('/', flightsController.index);

router.post('/', flightsController.create);

router.put('/:id', flightsController.update);

router.delete('/:id', flightsController.delete);

module.exports = router;
