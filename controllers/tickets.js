const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    addToBooking,
    index,
    show,
    create
};

function index(req, res, next) {
    Ticket.find({}, function(err, tickets) {
        if (err) return next(err);
        res.render('tickets/index', {tickets});
    });
}

function addToBooking(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('tickets/new', {
                title: 'Add Ticket',
                tickets
        });
    });
})
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        tickets
      });
    });
  }

  function show(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
      res.render('tickets/show', {title: 'Flight Details', ticket})
    });
  }

  function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }