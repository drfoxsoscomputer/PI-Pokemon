const { Router } = require("express");
const { getPokemonByNameHandler, getPokemonByIdHandler } = require("../handlers/pokemonsHandlers");
const  createPokemonHandler  = require("../handlers/postHandler");

const pokemonsRouter = Router();

// Ruta para buscar información de un pokemon por parametro ID (DB y/o Api).
// GET | /pokemons/:idPokemon (max:1017)
pokemonsRouter.get("/:id", getPokemonByIdHandler);

// Ruta obtener todos aquellos pokemons que coinciden con el nombre recibido por query (DB y Api)
// Debe poder buscarlo independientemente de mayúsculas o minúsculas
// Si no existe el pokemon, debe mostrar un mensaje adecuado.
// GET | /pokemons/name?="..."
pokemonsRouter.get('/',getPokemonByNameHandler);

// Ruta para crear un pokemon.
// POST | /pokemons
pokemonsRouter.post("/", createPokemonHandler);

module.exports = pokemonsRouter;
