const validations = (input, pokemonNames) => {
  let errors = [];
  const RegExpression = /^[a-zA-ZñÑ]+$/;
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?$/;

  if (!input.name) {
    errors.name = "❌ Name no puede estar vacio";
  } else if (pokemonNames.includes(input.name)) {
    errors.name = "❌ Ya existe un Pokémon con ese nombre";
  } else if (input.name.length < 4 || input.name.length > 10) {
    errors.name = "❌ El Nombre del Pokémon debe tener mas de 3 letras y máximo 10";
  } else if (!RegExpression.test(input.name)) {
    errors.name = "❌ El Nombre del Pokémon debe contener solo letras";
  } else if (input.hp === 0) {
    errors.hp = "❌ El atributo HP no puede ser 0";
  } else if (input.attack === 0) {
    errors.attack = "❌ El atributo Attack no puede ser 0";
  } else if (input.defense === 0) {
    errors.defense = "❌ El atributo Defense no puede ser 0";
  } else if (input.types.length === 0) {
    errors.types = "❌ Debe elegir 1 Tipo de Pokémon, máximo 2";
  } else if (!urlPattern.test(input.image)) {
    errors.image = "❌ La URL de la imagen debe ser válida";
  }
  return errors;
};

export default validations;
