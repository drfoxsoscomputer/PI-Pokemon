import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/actions";
import Cards from "../../Components/Cards/Cards.Component";
import Pagination from "../../Components/Pagination/Pagination.Component";
import FiltersBar from "../../Components/FiltersBar/FiltersBar.Component";
import Loading from "../../Components/Loading/Loading.Component";
import "./Home.Styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allPokemons, pokemons, currentPage } = useSelector((state) => state);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch, loading]);

  return (
    <div>
      <div>
        <FiltersBar />
      </div>

      {loading ? (
        <Loading />
      ) : pokemons.length > 0 ? (
        <div>
          <Pagination />
          <Cards
            allPokemons={allPokemons}
            pokemons={pokemons}
            currentPage={currentPage}
          />
          <Pagination />
        </div>
      ) : (
        <div>
          <h3 className="mensaje-error">No results found. </h3>
        </div>
      )}

      <br />
    </div>
  );
};

export default Home;
