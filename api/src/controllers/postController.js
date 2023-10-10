const { Pokemon, Type } = require("../db");

const createPokemon = async (name, image, hp, attack, defense, speed, height, weight, types, created) => {
  try {
    if (!name || !image || !hp || !attack || !defense) {
      throw new Error("Los campos obligatorios no pueden estar vacíos");
    }

    const typeNames = Array.isArray(types) ? types : [types];

    // Busca los tipos en la base de datos
    const typeRecords = await Type.findAll({ where: { name: typeNames } });

    const createdPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      created,
    });

    // Asocia los tipos al Pokémon creado
    await createdPokemon.addType(typeRecords);

    // Devuelve el Pokémon creado con sus tipos
    createdPokemon.types = typeRecords.map((type) => type.name);

    return createdPokemon;
  } catch (error) {
    throw new Error("Error al crear el Pokémon: " + error.message);
  }
};

module.exports = createPokemon;



// const createPokemon = async (name, image, hp, attack, defense, speed, height, weight, types, created) => {
//   try {
//     if (!name || !image || !hp || !attack || !defense) {
//       throw new Error("Los campos obligatorios no pueden estar vacíos");
//     }

//     const typeNames = Array.isArray(types) ? types : [types];
//     const typeRecords = await Type.findAll({ where: { name: typeNames } });

//     const createdPokemon = await Pokemon.create({
//       name,
//       image,
//       hp,
//       attack,
//       defense,
//       speed,
//       height,
//       weight,
//       created,
//     });

//     await createdPokemon.addType(typeRecords);
//     const typeNameArray = typeRecords.map((type) => type.name);
//     createdPokemon.types = typeNameArray;

//     return createdPokemon;
//   } catch (error) {
//     throw new Error("Error al crear el Pokémon: " + error.message);
//   }
// };

// module.exports = createPokemon;
