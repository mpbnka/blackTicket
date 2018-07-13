const express = require('express');
const app = express();
const morgan = require('morgan');

const citiRoutes = require('./api/routes/location');

//logging using morgan
app.use(morgan('dev'));

//routes
app.use('/location', citiRoutes);

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