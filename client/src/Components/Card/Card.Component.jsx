import { Link } from "react-router-dom";

import "./Card.Styles.css";
import typesBackground from "../../utils/colors";

const Card = (pokemons) => {
  const { id, name, image, types } = pokemons;

  const getBackgroundColor = () => {
    if (types && types.length > 0) {
      const primaryType = types[0].name;
      const backgroundStyle = typesBackground[primaryType] || {};

      return backgroundStyle;
    }
    return {};
  };

  return (
    <div
      className="card-container"
      style={getBackgroundColor()}>
      <h3 className="id"># {id}</h3>

      <Link to={`/home/${id}`}>
        <img
          src={image}
          alt={name}
          className="img"
        />
      </Link>
      <h2 className="name">{name?.toUpperCase()}</h2>

      <div>
        {types?.map((type, index) => (
          <span key={index}>
            <img
              src={`../../assets/img/labels/${type.name}.png`}
              alt={types.name}
              className="type-label"
            />
            {/* {type.name.toUpperCase()} */}
            {index < types.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
