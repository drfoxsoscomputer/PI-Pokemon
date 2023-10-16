import { useState } from "react";
import { useDispatch } from "react-redux";

import { getPokemonByNameOrId } from "../../Redux/actions";
import "./Search.Styles.css";

const Search = () => {
  const dispatch = useDispatch();
  const [nameOrId, setNameOrId] = useState("");

  const handleSearch = (event) => {
    setNameOrId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameOrId.trim() !== "") {
      dispatch(getPokemonByNameOrId(nameOrId));
      setNameOrId("");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-search"
          placeholder="Search Pokemon"
          value={nameOrId}
          onChange={handleSearch}
        />
        <button
          type="submit"
          className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
