const validations = (input, pokemonNames) => {
  let errors = [];
  const RegExpression = /^[a-zA-ZñÑ]+$/;
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?$/;

  if (!input.name) {
    errors.name = "Name cannot be empty";
  }
  if (pokemonNames.includes(input.name)) {
    errors.name = "There is already a Pokémon with that name";
  }
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "The Pokémon's Name must have more than 3 letters and a maximum of 15";
  }
  if (!RegExpression.test(input.name)) {
    errors.name = "Pokémon Name must contain only letters";
  }
  if (input.hp === 0) {
    errors.hp = "HP cannot be 0";
  }
  if (input.attack === 0) {
    errors.attack = "Attack cannot be 0";
  }
  if (input.defense === 0) {
    errors.defense = "Defense cannot be 0";
  }
  // if (input.types.length === 0) {
  //   errors.types = "You must choose 1 Type of Pokémon, maximum 2";
  // }
  if (!urlPattern.test(input.image)) {
    errors.image = "Image URL must be valid";
  }
  if (input.image === "") {
    errors.image = "Image URL cannot be empty";
  }
  
  return errors;
};

export default validations;
