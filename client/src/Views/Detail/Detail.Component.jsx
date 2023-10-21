import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearDetails, getDetails } from "../../Redux/actions";
import "./Detail.Styles.css";
import Loading from "../../Components/Loading/Loading.Component";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetail = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(clearDetails(id));
    };
  }, [dispatch]);

  return (
    <div className="container">
      {pokemonDetail?.name ? (
        <div className="cardDetail">
          <div className="cardAbout">
            {pokemonDetail.image && (
              <img
                src={pokemonDetail.image}
                alt={pokemonDetail.name}
                className="img"
              />
            )}
            <div className="aboutPokemon">
              <h2>{pokemonDetail.name.toUpperCase()}</h2>
              <div className="data">
                <p>
                  <span>ID: </span>
                  {pokemonDetail.id}
                </p>
                <p>
                  <span>HP: </span>
                  {pokemonDetail.hp}
                </p>
                <p>
                  <span>Attack: </span>
                  {pokemonDetail.attack}
                </p>
                <p>
                  <span>Defense:</span> {pokemonDetail.defense}
                </p>
                <p>
                  <span>Speed:</span> {pokemonDetail.speed}
                </p>
                <p>
                  <span>Height:</span> {pokemonDetail.height}
                </p>
                <p>
                  <span>Weight:</span> {pokemonDetail.weight}
                </p>
                <div>
                  {pokemonDetail?.types.map((type, index) => (
                    <span key={index}>
                      {type.name.toUpperCase()}
                      {index < pokemonDetail.types.length - 1 ? " " : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <br />
          <Link to="/home">Back</Link>
          <br />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
