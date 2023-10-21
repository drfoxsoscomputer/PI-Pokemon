import axios from "axios";

export const GET_POKEMONS = "FETCH_POKEMONS";
export const GET_TYPES = "FETCH_TYPES";
export const SEARCH_POKEMONS = "SEARCH_POKEMONS";
export const ORDER_POKEMONS_BY_NAME = "ORDER_POKEMONS";
export const FILTER_POKEMONS_BY_SOURCE = "FILTER_POKEMONS_BY_SOURCE";
export const FILTER_POKEMONS_BY_TYPES = "FILTER_POKEMONS_BY_TYPES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_DETAILS = "CLEAR_DETAILS";
export const POST_POKEMON = "POST_POKEMON";
export const RESET_FILTERS = "RESET_FILTERS";

const URL = "http://localhost:3001";

export const getTypes = () => {
  return async function (dispatch) {
    const types = await axios.get(`${URL}/type`);

    return dispatch({
      type: GET_TYPES,
      payload: types.data,
    });
  };
};

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const fetchedPokemons = (await axios(`${URL}/pokemons`)).data;
      return dispatch({ type: GET_POKEMONS, payload: fetchedPokemons });
    } catch (error) {
      // console.log(error.message);
    }
  };
};

export const searchPokemons = (nameOrId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons/?name=${nameOrId}`);
      const pokemon = response.data;
      dispatch({
        type: SEARCH_POKEMONS,
        payload: pokemon,
      });
    } catch (error) {
      alert(`El pokemon ${nameOrId} no existe`);
    }
  };
};

export const getPokemonsFilterByTypes = (filterTypes) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_POKEMONS_BY_TYPES,
      payload: filterTypes,
    });
  };
};

export const orderPokemonsByName = (ordered) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_POKEMONS_BY_NAME,
      payload: ordered,
    });
  };
};

export const filterPokemonsBySource = (source) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_POKEMONS_BY_SOURCE,
      payload: source,
    });
  };
};

export const setCurrentPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  };
};

export const createPokemon = (payload) => {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/pokemons`, payload);
      return dispatch({
        type: POST_POKEMON,
      });
    } catch (error) {
      // console.log(error);
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
      // console.log(error);
    }
  };
};

export const clearDetails = () => {
  return {
    type: CLEAR_DETAILS,
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  }
}
