var express = require('express');
var router = express.Router();
const destinationsController = require('../controllers/destinations');

//		'/'


router.get('/flights/:id/destinations', destinationsController.index);

router.post('/flights/:id/destinations', destinationsController.create);


// id is destination id, not flight id
router.delete('/destinations/:id', destinationsController.delete);

module.exports = router;
