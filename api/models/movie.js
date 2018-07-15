const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    releaseDate: Date,
    genre: String,
    producer: String,
    director: String,
    musicDirector: String,
    cast: Array,
    runningTime: Number,
    language: String,
    imageName: String,
    description: String,
    trailer: String
});

module.exports = mongoose.model('Movie', movieSchema);