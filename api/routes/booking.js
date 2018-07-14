const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Reservation = require("../models/reservation");

// Post call to add bookings
router.post('/', (req, res, next) => {
    console.log(req.body);
    const reservation = new Reservation({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.userName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        movieId: req.body.movieId,
        theatreId: req.body.theatreId,
        seats: req.body.seats,
        date: req.body.date,
        showTime: req.body.showTime
    },{
        versionKey: false
    });

    reservation.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST request to /city',
            createdCity: result
        });
    }).catch(err => {
        console.log(err.stack);
        res.status(500).json({
            error: err
        });
    });
});

// get list of bookings
router.get('/', (req, res, next) => {
    Reservation.find({},' -__v').exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
});

// get list of bookings
router.get('/:reservationId', (req, res, next) => {
    const id = req.params.reservationId
    Reservation.findById(id, '-__v').exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router;