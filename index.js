// Server
const express = require('express');

const app = express();

// website router
const router = express.Router();

// api router
const apiRouter = express.Router();

router.get('/', (req, res) => {
    // req.query.param to get a query param
    // res.json(res.query) to send a JSON of the query params
    res.send('Nothing to see here');
});

apiRouter.get('/', (req, res) => {
    res.send('Nothing to see here API');
});

app.use('/',router); // mount router, else we'll get CANNOT GET error
app.use('/api/', apiRouter);

module.exports = app;
