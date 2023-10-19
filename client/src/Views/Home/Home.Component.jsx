import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Redux/actions";

import Search from "../../Components/Search/Search.Component";
import Pagination from "../../Components/Pagination/Pagination.Component";
import Cards from "../../Components/Cards/Cards.Component";
import Loading from "../../Components/Loading/Loading.Component";

// import NavBar from "../../Components/NavBar/NavBar.Component";
import "./Home.Styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
    // return () => {
      
    // };
  }, [dispatch]);

  return (
    <div className="home">
      <br />
      <Search />
      <br />

      {allPokemons.length === 0 ? (
        <Loading /> // Muestra el loader mientras los datos se están cargando
      ) : (
        <div>
          <Pagination />
          <br />
          <Cards
          // key={pokemon.id}
          // pokemon={pokemon}
          />
          <br />
          <Pagination />
          <br />
        </div>
      )}

      <br />
      <br />
    </div>
  );
};

export default Home;
