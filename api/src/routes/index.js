const { Router } = require("express");
const typeRouter = require("./typeRouter");
const pokemonRouter = require("./pokemonRouter");

const router = Router();

// GET /types
router.use("/type", typeRouter);

// GET /pokemons
router.use("/pokemons", pokemonRouter);

module.exports = router;
