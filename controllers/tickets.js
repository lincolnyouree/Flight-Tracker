const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    // new: newTicket,
    addToBooking,
    index,
    
    create
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

// function newTicket(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//       res.render('tickets/new', {
//         title: 'Add Ticket',
//         tickets
//       });
//     });
//   }

  // function show(req, res) {
  //   Ticket.findById(req.params.id, function(err, ticket) {
  //     res.render('tickets/show', {title: 'Flight Details', ticket})
  //   });
  // }

  function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, tickets) {
      console.log(tickets)
      res.redirect(`/flights/${req.params.id}`)
    })
  }