const express = require('express');

const apiRouter = express.Router();

const pokemonsController = require('../controllers/pokemons/');

apiRouter.get('/pokemons', (req, res) => {
    res.send('pokemons resource...');
});

apiRouter.get('/pokemons', auth, pokemonsController.get);

module.export = apiRouter;