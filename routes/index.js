const express = require('express');
const apiRouter = express.Router();

const pokemonsController = require('../controllers/pokemonController');

apiRouter.get('/', (req, res) => {
    res.send('Hello trainer');
});

apiRouter.get('/pokemons', pokemonsController.getPokemons);

module.exports = apiRouter;