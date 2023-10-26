import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearDetails, getDetails } from "../../Redux/actions";
import Loading from "../../Components/Loading/Loading.Component";
import typesBackground from "../../utils/colors";
import "./Detail.Styles.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetail = useSelector((state) => state.details);

  const getBackgroundColor = () => {
    if (pokemonDetail.types && pokemonDetail.types.length > 0) {
      const primaryType = pokemonDetail.types[0].name;
      const backgroundStyle = typesBackground[primaryType] || {};

      return backgroundStyle;
    }
    return {};
  };

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(clearDetails(id));
    };
  }, [dispatch, id]);

  return (
    <div className="container">
      {pokemonDetail?.name ? (
        <div
          className="cardDetail"
          style={getBackgroundColor()}>
          <div className="cardAbout">
            {pokemonDetail.image && (
              <img
                src={pokemonDetail.image}
                alt={pokemonDetail.name}
                className="pokemon-img"
              />
            )}

            {pokemonDetail?.types.map((type, index) => (
              <span key={index}>
                <img
                  src={`../../assets/img/labels/${type.name}.png`}
                  alt={pokemonDetail.types.name}
                  className="type-image"
                />

                {index < pokemonDetail.types.length - 1 ? " " : ""}
              </span>
            ))}
          </div>
          <div>
            <h3 className="title"># {pokemonDetail.id}</h3>
            <h2 className="title">{pokemonDetail.name.toUpperCase()}</h2>
            <div className="data">
              <p>
                {pokemonDetail.hp}
                <span>HP</span>
              </p>
              <p>
                {pokemonDetail.attack}
                <span>Attack</span>
              </p>
              <p>
                {pokemonDetail.defense}
                <span>Defense</span>
              </p>
              <p>
                {pokemonDetail.speed}
                <span>Speed</span>
              </p>
              <p>
                {pokemonDetail.height}
                <span>Height</span>
              </p>
              <p>
                {pokemonDetail.weight}
                <span>Weight</span>
              </p>
            </div>
          </div>

          <div>
            <Link
              className="button-back"
              to="/home">
              Back
            </Link>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
