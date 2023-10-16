import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Redux/actions";

import Search from "../../Components/Search/Search.Component";
import Pagination from "../../Components/Pagination/Pagination.Component";
import Cards from "../../Components/Cards/Cards.Component";

// import NavBar from "../../Components/NavBar/NavBar.Component";
import "./Home.Styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
    // return () => {
    //   clearDetail();
    // };
  }, [dispatch]);

  return (
    <div className="home">

      {/* <NavBar /> */}
      <br />
      <Search />
      <br />
      <Pagination />
      <br />

      <Cards
        key={pokemon.id}
        pokemon={pokemon}
      />

      <Pagination />
      <br />
    </div>
  );
};

export default Home;

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getPokemons } from "../../Redux/actions";

// import Search from "../../Components/Search/Search.Component";
// import Pagination from "../../Components/Pagination/Pagination.Component";
// import Cards from "../../Components/Cards/Cards.Component";

// // import NavBar from "../../Components/NavBar/NavBar.Component";
// import "./Home.Styles.css";

// const Home = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPokemons());
//     // return () => {
//     //   clearDetail();
//     // };
//   }, [dispatch]);

//   return (
//     <div className="home">
//       {/* <h1 className="home-title">Home</h1> */}
//       {/* <NavBar /> */}
//       <br />
//       <Search />
//       <br />
//       <Pagination />
//       <Cards />
//       {/* <div>
//         <button
//           onClick={handlePageChange}
//           value={"+"}
//           disabled={indexPage === 1}>
//           Previous
//         </button>
//         <span>
//           Page {indexPage} of {quantityPages || 1}
//         </span>
//         <button
//           onClick={handlePageChange}
//           value={"-"}
//           disabled={indexPage === quantityPages}>
//           Next
//         </button>
//       </div> */}
//       <Pagination />
//     </div>
//   );
// };

// export default Home;
