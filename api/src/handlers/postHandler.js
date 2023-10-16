const createPokemon = require("../controllers/postController");

const createPokemonHandler = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight, types, created } = req.body;

  try {
    const newPokemon = await createPokemon(name.toLowerCase(), image, hp, attack, defense, speed, height, weight, types, created);

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message});
  }
};

module.exports = createPokemonHandler;
