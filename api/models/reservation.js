const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    contactNo: String,
    seats: Array,
    date: Date

});

module.exports = mongoose.model('Reservation', reservationSchema)