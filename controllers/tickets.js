const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addToBooking,
    index,
    create,
    delete: deleteOne
};

function index(req, res, next) {
    Ticket.find({}, function(err, tickets) {
        if (err) return next(err);
        res.render('tickets/index', {tickets});
    });
}

function addToBooking(req, res) {
  console.log(req.params.id)
  Flight.findById(req.params.id, function(err, flight) {
      res.render('tickets/new', {title: 'Add Ticket', flight});
  });
} ;

  function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, tickets) {
      console.log(tickets)
      res.redirect(`/flights/${req.params.id}`)
    })
  }

  function deleteOne (req, res) {
    Ticket.findByIdAndDelete(req.params.ticketId, function(err, ticket){
      res.redirect(`/flights/${req.params.flightId}`)
    })
  };