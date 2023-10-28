import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LandingPage from "./Views/Landing/LandingPage";
import Home from "./Views/Home/Home.Component";
import Detail from "./Views/Detail/Detail.Component";
import Create from "./Views/Create/Create.Component";
import NavBar from "./Components/NavBar/NavBar.Component";
import Error from "./Views/Error/Error.Component";

const App = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/home/:id"
          element={<Detail />}
        />
        <Route
          path="/create"
          element={<Create />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
};

export default App;
