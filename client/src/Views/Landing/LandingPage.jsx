import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPokemons, getTypes } from "../../Redux/actions";

import "./LandingPage.Styles.css";

import logo from "../../assets/img/logo2.png";
import pokeBall from "../../assets/img/pokeball.png";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="landing-page">
      <div>
        <img
          className="pokemonLogo"
          src={logo}
          alt=""
        />
      </div>
      <div>
      </div>
      <Link to="/home">
        <img
          className="pokeBall"
          src={pokeBall}
          alt=""
        />
      </Link>
    </div>
  );
};

export default LandingPage;
