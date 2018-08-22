// App provides me the API router

const express = require('express');
const app = express();
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/', apiRouter);

module.exports = app;

/*
app.use('/',router); // mount router, else we'll get CANNOT GET error

router.get('/', (req, res) => {
    // req.query.param to get a query param
    // res.json(res.query) to send a JSON of the query params
    res.send('Nothing to see here, visit /api');
});*/
