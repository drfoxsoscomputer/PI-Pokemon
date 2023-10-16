import { Routes, Route } from "react-router-dom";

import Home from "./Views/Home/Home.Component";
import Detail from "./Views/Detail/Detail.Component";
import Create from "./Views/Create/Create.Component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
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
      </Routes>
    </div>
  );
};

export default App;
