import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons} from "../../Redux/actions";
import Cards from "../../Components/Cards/Cards.Component";
import Pagination from "../../Components/Pagination/Pagination.Component";
import FiltersBar from "../../Components/FiltersBar/FiltersBar.Component";
import Loading from "../../Components/Loading/Loading.Component";
import "./Home.Styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allPokemons, pokemons, currentPage } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // dispatch(getTypes());
    dispatch(getPokemons())
      // .then(() => {
        setIsLoading(false); // Desactiva el Loading cuando se han cargado los datos
      // })
      // .catch((error) => {
      //   setIsLoading(false); // También desactiva el Loading en caso de error
      //   // console.error(error);
      // });
  }, [dispatch]);

  return (
    <div>
      <div>
        <FiltersBar />
      </div>

      {isLoading ? (
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
          <h3 className="mensaje-error">No results found. Try adjusting the filters or performing a new search.</h3>
        </div>
      )}

      <br />
    </div>
  );
};

export default Home;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemons, getTypes } from "../../Redux/actions";

// import Cards from "../../Components/Cards/Cards.Component";
// import Pagination from "../../Components/Pagination/Pagination.Component";
// import FiltersBar from "../../Components/FiltersBar/FiltersBar.Component";
// import Loading from "../../Components/Loading/Loading.Component";

// import "./Home.Styles.css";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { allPokemons, pokemons, currentPage } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(getTypes());
//     dispatch(getPokemons());
//   }, [dispatch]);

//   return (
//     <div>
//       <div>
//         <FiltersBar />
//       </div>

//       {pokemons.length > 0 ? (
//         <div>
//           <Pagination />

//           <Cards
//             allPokemons={allPokemons}
//             pokemons={pokemons}
//             currentPage={currentPage}
//           />
//           <Pagination />
//         </div>
//       ) : (

//         <Loading />
//       )}

//       <br />
//     </div>
//   );
// };

// export default Home;
