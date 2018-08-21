const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
    console.log(err);
});

const app = require('./index');

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
    console.log(`listening on port ${server.address().port}`)
});