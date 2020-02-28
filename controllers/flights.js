const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    new: newFlight,
    show,
    create,
    delete: deleteOne
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
    res.render('flights/show', {title: 'Flight Details', flight, tickets})
  });
  });
}

function index(req, res, next) {
    Flight.find({}, function(err, flights) {
        if (err) return next(err);
        res.render('flights/index', {flights});
    });
}

function create(req, res) {
  if (!req.body.departs) {
    let redate = new Date();
    redate.setFullYear(redate.getFullYear()+1);
    req.body.departs
}
    req.body.nowBoarding = !!req.body.nowBoarding;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    let flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights');
    });
  }

  function newFlight(req, res) {
    res.render('flights/new');
  }

function deleteOne(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights');
  })
};