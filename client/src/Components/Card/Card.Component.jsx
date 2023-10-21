import { Link } from "react-router-dom";

import "./Card.Styles.css";

const Card = (pokemons) => {
  const { id, name, image, types } = pokemons;
  return (
    <div className="card-container">
      <p># {id}</p>
      <h2>{name?.toUpperCase()}</h2>

      <Link to={`/home/${id}`}>
        <img
          src={image}
          alt={name}
          className="img"
        />
      </Link>

      <div>
        {types?.map((type, index) => (
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
