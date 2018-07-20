const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    contactNo: String,
    seats: Array,
    date: Date,
    showTime: Number,
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    theatreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Theatre', required: true },

});

module.exports = mongoose.model('Reservation', reservationSchema)