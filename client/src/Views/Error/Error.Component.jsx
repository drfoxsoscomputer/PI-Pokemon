import { Link } from "react-router-dom";

import "./Error.Styles.css";

import error404 from "../../assets/img/404.png";
// import equipoRocket from "../../assets/img/equiporocket.png";

const Error = () => {
  return (
    <div className="error-container">
      <div>
        <img
          className="error-image"
          src={error404}
          alt="Error 404"
        />
        <Link
          className="error-button"
          to="/home">
          Back
        </Link>
        {/* <div className="error-404">
          <img
            src={error404}
            alt="Error 404"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Error;
