const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights/new
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.delete('/:id', flightsCtrl.delete);
router.get('/:id/edit', flightsCtrl.showUpdatePage);
router.put('/:id', flightsCtrl.update);

router.post('/', flightsCtrl.create);

module.exports = router;
