const { getPokemonById, getAllPokemons, getPokemonByName } = require("../controllers/pokemonsControllers");

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;
  // const source = isNaN(id) ? "db" : "api";
  try {
    const response = await getPokemonById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonByNameHandler = async (req, res) => {
  const { name } = req.query;
  
  try {
    if (name) {
      const lowercaseName = name.toLowerCase();
      const response = await getPokemonByName(lowercaseName);
      return res.status(200).json(response);
    }
    // al no recibir nada por query, devuelve todos los pokemons
    const response = await getAllPokemons();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemonByIdHandler,
  getPokemonByNameHandler,
  getAllPokemons,
};
