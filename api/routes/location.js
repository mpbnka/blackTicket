const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Movie = require("../models/movie");
const City = require("../models/city");
const Theatre = require("../models/theatre");

// Post call to add location
router.post('/', (req, res, next) => {
    console.log(req.body);
    const city = new City({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    },{
        versionKey: false
    });

    city.save().then(result => {
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

// get list of locations
router.get('/', (req, res, next) => {
    City.find({},' -__v').exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
});


// MOVIES----------------------------
// get list of movies for the location
router.get('/:locationId/movie', (req, res, next) => {
    Movie.find({},' -__v').exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.post('/:locationId/movie', (req, res, next) => {
    console.log(req.body);
    const movie = new Movie({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        releaseDate: req.body.release_date,
        genre: req.body.genre,
        producer: req.body.produced_by,
        director: req.body.directed_by,
        musicDirector: req.body.music_by,
        cast: req.body.cast,
        runningTime: req.body.running_time,
        language: req.body.language
    },{
        versionKey: false
    });

    movie.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST request to /movie',
            createdMovie: result
        });
    }).catch(err => {
        console.log(err.stack);
        res.status(500).json({
            error: err
        });
    });
});

//get movie details
router.get('/:locationId/movie/:movieId', (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id, '-__v').exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
});


// THEATRE ----------------
//POST add theatre
router.post('/:locationId/theatre', (req, res, next) => {
    console.log(req.body);
    const theatre = new Theatre({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cityId: req.body.cityId,
        movieId: req.body.movieId,
        seats: req.body.seats
    },{
        versionKey: false
    });

    theatre.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST request to /theatre',
            createdTheatre: result
        });
    }).catch(err => {
        console.log(err.stack);
        res.status(500).json({
            error: err
        });
    });
});

// get list of theatres
router.get('/:locationId/theatre', (req, res, next) => {
    const cityId = req.params.locationId;
    console.log("req.query " + Object.keys(req.query).length);
    if(Object.keys(req.query).length === 0){
        Theatre.find({cityId},'-__v').exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        }).catch(err =>{
            console.log(err);
            res.status(500).json({error: err});
        });
    } else {
        const movieId = req.query.movieId;
        Theatre.find({cityId: cityId, movieId: movieId}, '-__v').exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        }).catch(err =>{
            console.log(err);
            res.status(500).json({error: err});
        });
    }

});

router.get('/:locationId/theatre/:theatreId', (req, res, next) => {
    const theatreId = req.params.theatreId;
    Theatre.findById(theatreId, '-__v').exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
})

module.exports = router;