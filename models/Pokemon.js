/**
 *  Define Pokemon schema
 */

const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    locations: String,
    sprite: String
});

module.exports = mongoose.model('pokemons', pokemonSchema);