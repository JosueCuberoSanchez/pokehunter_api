const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon');

const respond = (res, status, content) => {
    res.status(status);
    res.json(content);
};

async function get(req, res) {
  const pokemons  = await Pokemon.find();
  respond(res, 200, pokemons);
}

module.exports = { get };