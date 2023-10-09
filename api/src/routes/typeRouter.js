const { Router } = require("express");
const getTypeHandler = require("../handlers/typeHandler");

const typeRouter = Router();

// Ruta para cargar información de tipos de pokemon.
// GET /types
typeRouter.get("/", getTypeHandler);

module.exports = typeRouter;
