import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Detail.Styles.css";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const pokemonDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const data = response.data;
        console.log(data);
        if (data.name) {
          const types = data.types.map((typeData) => typeData.PokemonType || typeData);
          console.log(types);
          setPokemon({ ...data, types });
        } else {
          throw new Error("No se encontró el Pokemon con ese Id");
        }
      } catch (error) {
        alert(error);
      }
    };
    pokemonDetail();

    return () => {
      setPokemon({});
    };
  }, [id]);

  return (
    <div className="container">
      {pokemon.name ? (
        <div className="cardDetail">
          
          <div className="cardAbout">
            {pokemon.image && (
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="img"
              />
            )}
            <div className="aboutPokemon">
              <h2>{pokemon.name.toUpperCase()}</h2>
              <div className="data">
                <p>
                  <span>ID: </span>
                  {pokemon.id}
                </p>
                <p>
                  <span>HP: </span>
                  {pokemon.hp}
                </p>
                <p>
                  <span>Attack: </span>
                  {pokemon.attack}
                </p>
                <p>
                  <span>Defense:</span> {pokemon.defense}
                </p>
                <p>
                  <span>Speed:</span> {pokemon.speed}
                </p>
                <p>
                  <span>Height:</span> {pokemon.height}
                </p>
                <p>
                  <span>Weight:</span> {pokemon.weight}
                </p>
                <div>
                  {pokemon?.types.map((type, index) => (
                    <span key={index}>
                      {type.name.toUpperCase()}
                      {index < pokemon.types.length - 1 ? " " : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link to="/home">Back</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
