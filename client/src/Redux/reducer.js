import {
  GET_TYPES,
  SEARCH_POKEMONS,
  ORDER_POKEMONS_BY_NAME,
  FILTER_POKEMONS_BY_SOURCE,
  FILTER_POKEMONS_BY_TYPES,
  GET_POKEMONS,
  SET_CURRENT_PAGE,
  GET_DETAILS,
  CLEAR_DETAILS,
  POST_POKEMON,
  RESET_FILTERS,
} from "./actions-types";

const initialState = {
  allPokemons: [], // Pokémons Original
  pokemons: [], //Pokémons Copia
  types: [],
  details: [], //Detalles de un Pokémon
  //paginado
  currentPage: 1,
  totalPages: 1,
  refresh: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };

    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
        totalPages: Math.ceil(payload.length / 12),
        refresh: false,
      };

    case POST_POKEMON:
      return {
        ...state,
        refresh: false,
      };

    case SEARCH_POKEMONS:
      return {
        ...state,
        pokemons: [payload],
        currentPage: 1,
        totalPages: 1,
        refresh: false,
      };

    case ORDER_POKEMONS_BY_NAME:
      let orderedPokemons = [...state.pokemons];
      orderedPokemons.sort((a, b) => {
        if (payload) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      return {
        ...state,
        pokemons: orderedPokemons,
      };

    case FILTER_POKEMONS_BY_SOURCE:
      let combinedPokemons = [];
      const dbPokemons = state.allPokemons.filter((pokemon) => pokemon.created);
      const apiPokemons = state.allPokemons.filter((pokemon) => !pokemon.created);

      if (payload === "all") {
        combinedPokemons = [...state.allPokemons];
      } else if (payload === "db") {
        combinedPokemons = [...dbPokemons];
      } else if (payload === "api") {
        combinedPokemons = [...apiPokemons];
      }

      return {
        ...state,
        pokemons: combinedPokemons,
        currentPage: 1,
        totalPages: Math.ceil(combinedPokemons.length / 12),
        refresh: false,
      };

    case FILTER_POKEMONS_BY_TYPES:
      let filteredPokemons = [];
      if (payload === "all") {
        filteredPokemons = state.allPokemons;
      } else {
        filteredPokemons = state.allPokemons.filter((pokemon) => pokemon.types.some((type) => type.name === payload));
      }
      return {
        ...state,
        pokemons: filteredPokemons,
        currentPage: 1,
        totalPages: Math.ceil(filteredPokemons.length / 12),
        refresh: false,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        details: [],
        pokemons: [],
      };

    case RESET_FILTERS:
      return {
        ...state,
        pokemons: state.allPokemons,
        currentPage: 1,
        totalPages: Math.ceil(state.allPokemons.length / 12),
        refresh: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;
