const mongoose = require('mongoose');

const theatreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    seats: Array,
});

module.exports = mongoose.model('Theatre', theatreSchema);