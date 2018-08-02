const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const locationRoutes = require('./api/routes/location');
const reservationRoutes = require('./api/routes/booking');

//connect to mongo db on localhost
mongoose.connect(
    'mongodb://127.0.0.1:27017/blackticket', { useNewUrlParser: true, }
).then(() => console.log('connected to DB')).catch(err => console.log(err));

//logging using morgan
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

//routes
app.use('/api/location', locationRoutes);
app.use('/api/reservation', reservationRoutes);
//redirect all other to dist
app.use('/', express.static('blackticket'))

//throw error when no endpoint
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;