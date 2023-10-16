import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const SET_INDEX_PAGE = "SET_INDEX_PAGE";
export const GET_POKEMON_BY_NAME_OR_ID = "GET_POKEMON_BY_NAME_OR_ID";

export const SET_SOURCE = "SET_SOURCE";

const URL = "http://localhost:3001/pokemons";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}`);
    const allPokemons = apiData.data;

    dispatch({ type: GET_POKEMONS, payload: allPokemons });
  };
};

export const setIndexPage = (index) => {
  return {
    type: SET_INDEX_PAGE,
    payload: index,
  };
};

export const getPokemonByNameOrId = (nameOrId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/?name=${nameOrId}`);
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
