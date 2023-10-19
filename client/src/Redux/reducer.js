import { GET_POKEMONS, GET_TYPES, SET_INDEX_PAGE, POST_POKEMON, GET_POKEMON_BY_NAME_OR_ID, GET_DETAILS, CLEAR_DETAILS } from "./actions-types";

const initialState = {
  allPokemons: [],
  updatedShowPokemons: [],
  types: [],
  details: [],
  //paginado
  indexPage: 1,
  quantityPokemons: 12,
  indexFirstPokemon: 0,
  indexLastPokemon: 12,
  quantityPages: 1,
  prevIndexPage: 1,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        // originalPokemons: action.payload,
        updatedShowPokemons: action.payload.slice(state.indexFirstPokemon, state.indexLastPokemon),
        quantityPages: Math.ceil(action.payload.length / state.quantityPokemons),
      };

    case POST_POKEMON:
      return {
        ...state,
      };

    case SET_INDEX_PAGE: {
      let index = action.payload || state.indexPage;
      let first = (index - 1) * state.quantityPokemons;
      let last = index * state.quantityPokemons;
      let update = state.allPokemons.slice(first, last);
      return {
        ...state,
        indexPage: index,
        indexLastPokemon: last,
        indexFirstPokemon: first,
        updatedShowPokemons: update,
        prevIndexPage: state.indexPage,
      };
    }

    case GET_POKEMON_BY_NAME_OR_ID:
      return {
        ...state,
        updatedShowPokemons: [action.payload],
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        details: [],
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
