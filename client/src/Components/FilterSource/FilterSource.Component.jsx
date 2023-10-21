import { useState } from "react";
import { useDispatch } from "react-redux";

import { filterPokemonsBySource } from "../../Redux/actions";

import "./FilterSource.Styles.css";

const FilterSource = () => {
  const dispatch = useDispatch();
  const [selectedSource, setSelectedSource] = useState("all");

  const handleFilterBySource = (source) => {
    dispatch(filterPokemonsBySource(source));
    setSelectedSource(source);
  };

  return (
    <div>
      <button
        className={selectedSource === "all" ? "selected first-button" : "first-button"}
        onClick={() => handleFilterBySource("all")}>
        All Pokémon
      </button>
      <button
        className={selectedSource === "api" ? "selected center-button" : "center-button"}
        onClick={() => handleFilterBySource("api")}>
        Api Pokémon
      </button>
      <button
        className={selectedSource === "db" ? "selected last-button" : "last-button"}
        onClick={() => handleFilterBySource("db")}>
        DB Pokémon
      </button>
    </div>
  );
};

export default FilterSource;

