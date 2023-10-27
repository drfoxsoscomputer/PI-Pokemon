const axios = require("axios");
const { Pokemon, Type } = require("../db");
require("dotenv").config();
const { URL_API } = process.env;
const { validate: validateUuid } = require("uuid");
const { cleanPokemon } = require("../utils/index");

const getPokemonsApi = async () => {
  try {
    // const pokemonsInfoApi = await axios.get(`${URL_API}`);
    const pokemonsInfoApi = await axios.get(`${URL_API}/?limit=100`);
    // const pokemonsInfoApi = await axios.get(`${URL_API}/?limit=2000`);
    const pokemonUrls = pokemonsInfoApi.data.results.map((pokemon) => pokemon.url);

    const pokemonApiResponses = await Promise.all(pokemonUrls.map((url) => axios.get(url)));

    const cleanedPokemonData = pokemonApiResponses.map((response) => cleanPokemon(response.data));

    return cleanedPokemonData;
  } catch (error) {
    throw new Error(`Error al obtener datos de la API: ${error.message}`);
  }
};

const getPokemonsDB = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return pokemonsDB;
  } catch (error) {
    throw new Error(`Error al obtener datos de la base de datos: ${error.message}`);
  }
};

const getAllPokemons = async () => {
  try {
    const [pokemonApiData, pokemonDBData] = await Promise.all([getPokemonsApi(), getPokemonsDB()]);
    return [...pokemonApiData, ...pokemonDBData];
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

const getPokemonById = async (id) => {
  try {
    let response;

    // Si el ID es un UUID, buscamos en la base de datos
    if (validateUuid(id)) {
      response = await Pokemon.findOne({
        where: { id },
        include: {
          attributes: ["name"],
          model: Type,
          through: {
            attributes: [],
          },
        },
      });
    } else {
      // Si no es un UUID válido, buscamos en la API
      const apiResponse = await axios.get(`${URL_API}/${id}`);
      const pokemonDataApi = apiResponse.data;

      if (!pokemonDataApi) {
        throw new Error(`El Pokémon con ID '${id}' no se encontró en la API.`);
      }

      response = cleanPokemon(pokemonDataApi);
    }

    if (!response) {
      throw new Error(`El Pokémon con ID '${id}' no se encontró.`);
    }

    return response;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

const getPokemonByName = async (name) => {
  try {
    // Primero, busca en la base de datos
    const pokemonDB = await Pokemon.findOne({
      where: { name },
      include: {
        attributes: ["name"],
        model: Type,
        through: {
          attributes: [],
        },
      },
    });

    if (pokemonDB) {
      console.log("Traído de la base de datos");
      return pokemonDB;
    }

    // Si no se encuentra en la base de datos, busca en la API
    const apiResponse = await axios.get(`${URL_API}/${name}`);
    const pokemonData = apiResponse.data;

    if (pokemonData) {
      console.log("Traído de la API");
      const pokemonApi = cleanPokemon(pokemonData);
      return pokemonApi;
    }

    // Si no se encuentra en la API, lanza una excepción
    throw new Error(`El Pokémon '${name}' no se encontró en la base de datos ni en la API.`);
  } catch (error) {
    throw new Error(`Error al obtener el Pokémon '${name}': ${error.message}`);
  }
};

module.exports = { getPokemonsApi, getPokemonById, getAllPokemons, getPokemonByName };
