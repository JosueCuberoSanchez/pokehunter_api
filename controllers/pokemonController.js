/**
 * API pokemons controller
 */
const mongoose = require('mongoose');

require('../models/Pokemon');
const Pokemon = mongoose.model('pokemons');

// JSON response utility function
const respond = function(res, status, content) {
    res.status(status);
    res.json(content);
};

async function getPokemons(req, res) {
    try {
        const pokemons = await Pokemon.find();

        console.log('pokemons from controller: ', pokemons );
        respond(res, 200, { pokemons })
    } catch (e) {
        console.log('Error :', e);
        next(e) // do not let the server hanging
    }
}

async function createPokemon(req, res) {
    try {
        console.log(req.body);
        const pokemon = new Pokemon(req.body);
        await pokemon.save();
        respond(res, 201, { pokemon })
    } catch (e) {
        console.log('Error :', e);
        next(e);
    }
}

module.exports = { getPokemons, createPokemon };