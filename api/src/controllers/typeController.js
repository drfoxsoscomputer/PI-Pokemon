const { Type } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { URL_API_TYPES } = process.env;

const getTypesController = async () => {
  const typeDB = await Type.findAll();

  if (typeDB.length) {
    console.log("Los datos Type ya estaban cargados en la DB 👎");
    return typeDB;
  }
  const typeApi = (await axios.get(`${URL_API_TYPES}`)).data.results.map(({ name }) => {
    return { name };
  });
  await Type.bulkCreate(typeApi);
  console.log("Se cargaron los datos Type desde la Api a la DB 👍");
  return await Type.findAll();
};

module.exports = getTypesController;
