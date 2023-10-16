import { Link } from "react-router-dom";

import "./Card.Styles.css";

const Card = (pokemons) => {
  const {id, name, image, types } = pokemons;
  return (
    <div className="card-container">
      <p># {id}</p>
      <h2>{name.toUpperCase()}</h2>

      <Link to={`/home/${id}`}>
        <img
          src={image}
          alt={name}
          className="img"
        />
      </Link>

      <div>
        {types.map((type, index) => (
          <span key={index}>
            {type.name.toUpperCase()}
            {index < types.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

// import { useSelector } from 'react-redux';
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
//   const pokemon = useSelector((state) => state.pokemons);

//   useEffect(() => {
//     dispatch(getPokemons());
//     // return () => {
//     //   clearDetail();
//     // };
//   }, [dispatch]);

//   return (
//     <div className="home">

//       {/* <NavBar /> */}
//       <br />
//       <Search />
//       <br />
//       <Pagination />
//       <br />

//       <Cards
//         key={pokemon.id}
//         pokemon={pokemon}
//       />

//       <Pagination />
//       <br />
//     </div>
//   );
// };

// export default Home;

// import { Link } from "react-router-dom";

// import "./Card.Styles.css";

// const Card = (pokemons) => {
//   const { id, name, image, types } = pokemons;
//   return (
//     <div className="card-container">
//       <p># {id}</p>
//       <h2>{name.toUpperCase()}</h2>

//       <Link to={`/home/${id}`}>
//         <img
//           src={image}
//           alt={name}
//         />
//       </Link>

//       <div>
//         {types.map((type, index) => (
//           <span key={index}>
//             {type.name.toUpperCase()}
//             {index < types.length - 1 ? " " : ""}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
