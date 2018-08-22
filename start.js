const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
    console.log(err);
});

//import models
const models = require('./models/Pokemon');

const app = require('./index');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${server.address().port}`)
});