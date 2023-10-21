import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPokemons, getTypes } from "../../Redux/actions";

import "./LandingPage.Styles.css";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="rectangle-41">
      <Link to="/home">
        <button className="button">Enter</button>
      </Link>
    </div>
  );
};

export default LandingPage;
