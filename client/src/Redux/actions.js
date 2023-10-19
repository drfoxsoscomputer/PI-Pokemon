import axios from "axios";

import { GET_POKEMONS, GET_TYPES, SET_INDEX_PAGE, POST_POKEMON, GET_POKEMON_BY_NAME_OR_ID, GET_DETAILS, CLEAR_DETAILS } from "./actions-types";

const URL = "http://localhost:3001";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}/pokemons`);
    const allPokemons = apiData.data;

    dispatch({ type: GET_POKEMONS, payload: allPokemons });
  };
};

export function getTypes() {
  return async function (dispatch) {
    const types = await axios.get(`${URL}/type`);

    return dispatch({
      type: GET_TYPES,
      payload: types.data,
    });
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/pokemons`, payload);
      return dispatch({
        type: POST_POKEMON,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const setIndexPage = (index) => {
  return {
    type: SET_INDEX_PAGE,
    payload: index,
  };
};

export const getPokemonByNameOrId = (nameOrId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons/?name=${nameOrId}`);
      const pokemon = response.data;
      dispatch({
        type: GET_POKEMON_BY_NAME_OR_ID,
        payload: pokemon,
      });
    } catch (error) {
      alert(`El pokemon ${nameOrId} no existe`);
    }
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons/${id}`);
      const pokemon = response.data;
      return dispatch({
        type: GET_DETAILS,
        payload: pokemon,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetails = () => {
  return {
    type: CLEAR_DETAILS,
  };
};