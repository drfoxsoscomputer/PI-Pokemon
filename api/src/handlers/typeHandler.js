const getTypesController = require("../controllers/typeController");

const getTypeHandler = async (req, res) => {
  try {
    const types = await getTypesController();
    res.json(types);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTypeHandler;
