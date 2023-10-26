import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../Redux/actions";

import Cards from "../../Components/Cards/Cards.Component";
import Pagination from "../../Components/Pagination/Pagination.Component";
import FiltersBar from "../../Components/FiltersBar/FiltersBar.Component";
import Loading from "../../Components/Loading/Loading.Component";

import "./Home.Styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allPokemons, pokemons, currentPage } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <div>
        <FiltersBar />
      </div>

      {pokemons.length > 0 ? (
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
        <Loading />
      )}

      <br />
    </div>
  );
};

export default Home;
