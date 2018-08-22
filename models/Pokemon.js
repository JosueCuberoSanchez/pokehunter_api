const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const pokemonSchema = new mongoose.Schema({
    name: String,
    entry: Number,
    locations: [String],
    sprite: String
});

pokemonSchema.pre('save', function (next) {

});

module.exports = mongoose.model(('Pokemon'), pokemonSchema);