import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import store from "./Redux/store";
import App from "./App";

// local
// axios.defaults.baseURL = "http://localhost:3001";

// Deploy
axios.defaults.baseURL = "https://pi-pokemon-production-4ff0.up.railway.app/";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
