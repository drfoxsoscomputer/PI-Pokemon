import { GET_POKEMONS, SET_INDEX_PAGE, SET_SOURCE, GET_POKEMON_BY_NAME_OR_ID } from "./actions";

const initialState = {
  source: "API",
  pokemons: [],
  // searchedPokemon: [],
  // filteredPokemons: [],
  originalPokemons: [],
  updatedShowPokemons: [],
  //paginado
  indexPage: 1,
  quantityPokemons: 12,
  indexFirstPokemon: 0,
  indexLastPokemon: 12,
  quantityPages: 1,
  prevIndexPage: 1,
  // buscar por nombre
  // searchedPokemon: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        originalPokemons: action.payload,
        updatedShowPokemons: action.payload.slice(state.indexFirstPokemon, state.indexLastPokemon),
        quantityPages: Math.ceil(action.payload.length / state.quantityPokemons),
      };

    case SET_INDEX_PAGE: {
      let index = action.payload || state.indexPage;
      let first = (index - 1) * state.quantityPokemons;
      let last = index * state.quantityPokemons;
      let update = state.pokemons.slice(first, last);
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

    case SET_SOURCE: {
      const source = action.payload;

      const updatedShowPokemons = state.originalPokemons.filter((pokemon) => {
        return source === "" || pokemon.source === source;
      });

      return {
        ...state,
        source,
        updatedShowPokemons,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
