import { useSelector } from "react-redux";

import Card from "../Card/Card.Component";
// import Search from "../Search/Search.Component";
import "./Cards.Styles.css";

const Cards = () => {
  const updatedShowPokemons = useSelector((state) => state.updatedShowPokemons);
  console.log(updatedShowPokemons);

  return (
    <div className="cards-container">
      <div>
        {/* <Search />
        <br /> */}
      </div>

      {updatedShowPokemons?.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

export default Cards;
