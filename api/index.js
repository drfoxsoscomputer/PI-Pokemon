//! .S_sSSs      sSSs   .S_sSSs     .S    sSSs
//! .SS~YS%%b    d%%SP  .SS~YS%%b   .SS   d%%SP
//! S%S   `S%b  d%S'    S%S   `S%b  S%S  d%S'
//! S%S    S%S  S%S     S%S    S%S  S%S  S%|
//! S%S    S&S  S&S     S%S    S&S  S&S  S&S
//! S&S    S&S  S&S_Ss  S&S    S&S  S&S  Y&Ss
//! S&S    S&S  S&S~SP  S&S    S&S  S&S  `S&&S
//! S&S    S&S  S&S     S&S    S&S  S&S    `S*S
//! S*S    d*S  S*b     S*S    S*S  S*S     l*S
//! S*S   .S*S  S*S.    S*S    S*S  S*S    .S*P
//! S*S_sdSSS    SSSbs  S*S    S*S  S*S  sSS*S
//! SSS~YSSY      YSSP  S*S    SSS  S*S  YSS'
//!                     SP          SP
//!                     Y           Y

const app = require("./src/app");
const { conn } = require("./src/db");
require("dotenv").config();
const { PORT } = process.env;
const getTypesController = require("./src/controllers/typeController");

// Syncing all the models at once.
conn
  .sync({ force: true }) // cambiar a false al terminar
  .then(() => {
    getTypesController();
    app.listen(PORT, () => {
      console.log(`✔ Server is listening on port: ${PORT} 👍`); // eslint-disable-line no-console
    });
  })
  .catch((error) => {
    console.log(error);
  });
