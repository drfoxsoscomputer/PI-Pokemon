import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPokemons, getTypes } from "../../Redux/actions";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <Link to="/home">
      <button className="button">Enter</button>
    </Link>
  );
};

export default LandingPage;
