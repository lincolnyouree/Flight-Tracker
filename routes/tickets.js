const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// router.get('/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.get('/flights/:id/tickets/new', ticketsCtrl.addToBooking);

module.exports = router;