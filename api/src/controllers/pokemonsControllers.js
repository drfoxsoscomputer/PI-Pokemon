const axios = require("axios");
const { Pokemon, Type } = require("../db");
require("dotenv").config();
const { URL_API } = process.env;
const { v4: uuidv4, validate: validateUuid } = require('uuid');
const { cleanPokemon } = require("../utils/index");

const getPokemonsApi = async () => {
  try {
    const pokemonsInfoApi = await axios.get(`${URL_API}`);
    const fetchPokemonDetails = pokemonsInfoApi.data.results.map((pokemon) => axios.get(pokemon.url));
    const pokemonApiResponses = await axios.all(fetchPokemonDetails);
    const pokemonApiUrls = pokemonApiResponses.map((obj) => obj.data);
    const cleanedPokemonData = pokemonApiUrls.map((pokemon) => cleanPokemon(pokemon));

    return cleanedPokemonData;
  } catch (error) {
    throw new Error("Error al obtener datos de la API: " + error.message);
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
    throw new Error("Error al obtener datos de la base de datos: " + error.message);
  }
};

const getAllPokemons = async () => {
  try {
    const [pokemonApiData, pokemonDBData] = await Promise.all([getPokemonsApi(), getPokemonsDB()]);
    return [...pokemonApiData, ...pokemonDBData];
  } catch (error) {
    throw new Error("Error al obtener todos los Pokémon: " + error.message);
  }
};

const getPokemonById = async (id) => {
  try {
    let response;

    // Si el ID es un UUID buscamos en la base de datos
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
      const res = (await axios.get(`${URL_API}/${id}`)).data;
      response = cleanPokemon(res);
    }

    if (!response) {
      throw new Error(`El Pokémon con ID '${id}' no se encontró.`);
    }

    return response;
  } catch (error) {
    throw new Error("Error al obtener el Pokémon por ID: " + error.message);
  }
};

const getPokemonByName = async (name) => {
  try {
    const infoApi = (await axios.get(`${URL_API}/${name}`)).data;

    if (infoApi) {
      console.log("Traído de la API");
      const pokemonApi = cleanPokemon(infoApi);
      return pokemonApi;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Si la API devuelve un error 404, busca en la base de datos
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
    }
    // Si hay otro tipo de error, lanza una excepción
    throw new Error(`El Pokémon '${name}' no se encontró. ` + error.message);
  }
};

module.exports = { getPokemonsApi, getPokemonById, getAllPokemons, getPokemonByName };
