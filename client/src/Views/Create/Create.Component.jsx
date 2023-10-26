import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createPokemon, getPokemons, getTypes } from "../../Redux/actions";
import validations from "./validations";
import "./Create.Styles.css";

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemonNames = useSelector((state) => state.allPokemons.map((pokemon) => pokemon.name));
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  function resetForm() {
    setInput({
      name: "",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
    });
    setErrors({});
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(validations({ ...input, [event.target.name]: event.target.value.toLowerCase() }, pokemonNames));
  }

  function handleSelect(event) {
    if (input.types.includes(event.target.value)) {
      alert("⚠ You have already chosen that Type of Pokémon");
    } else {
      setInput({
        ...input,
        types: [...input.types, event.target.value],
      });
    }
    event.target.value = "default";
  }

  function handleClick(event) {
    const updatedTypes = input.types.filter((type) => type !== event.target.id);
    setInput({
      ...input,
      types: updatedTypes,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Realizar la conversión de los campos a números enteros
    const intHp = parseInt(input.hp, 10);
    const intAttack = parseInt(input.attack, 10);
    const intDefense = parseInt(input.defense, 10);
    const intSpeed = parseInt(input.speed, 10);
    const intHeight = parseInt(input.height, 10);
    const intWeight = parseInt(input.weight, 10);

    // Actualizar los valores en el objeto 'input'
    setInput({
      ...input,
      hp: intHp,
      attack: intAttack,
      defense: intDefense,
      speed: intSpeed,
      height: intHeight,
      weight: intWeight,
    });

    if (errors.length === 0 && input.name.length && input.types.length > 0) {
      dispatch(createPokemon(input));
      alert(`✅ Congratulations! you created the Pokémon
      ${input.name}.`);
      dispatch(getPokemons());
      resetForm();
    }
  }

  return (
    <div>
      <div className="container-main">
        <div className="container-form">
          <h1>CREAT POKÉMON</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div>
              <label>* Name </label>
              <input
                type="text"
                value={input.name}
                name="name"
                autoComplete="off"
                spellCheck="false"
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="error">{errors.name}</p>}

            <div>
              <label>* URL Imagen </label>
              <input
                value={input.image}
                name="image"
                title="Image URL"
                placeholder="URL imagen..."
                autoComplete="off"
                spellCheck="false"
                onChange={handleChange}
              />
              {errors.image && <p className="error">{errors.image}</p>}
            </div>

            <div>
              <label>* HP</label>
              <input
                type="range"
                min="0"
                max="500"
                value={input.hp}
                name="hp"
                onChange={handleChange}
              />
              {/* <span> {input.hp}</span> */}
              {errors.hp && <p className="error">{errors.hp}</p>}
            </div>
            <div>
              <label>* Attack</label>
              <input
                type="range"
                min="0"
                max="500"
                value={input.attack}
                name="attack"
                onChange={handleChange}
              />
              {/* <span> {input.attack}</span> */}
              {errors.attack && <p className="error">{errors.attack}</p>}
            </div>
            <div>
              <label>* Defense</label>
              <input
                type="range"
                min="0"
                max="500"
                value={input.defense}
                name="defense"
                onChange={handleChange}
              />
              {/* <span> {input.defense}</span> */}
              {errors.defense && <p className="error">{errors.defense}</p>}
            </div>
            <div>
              <label> Speed</label>
              <input
                type="range"
                min="0"
                max="500"
                value={input.speed}
                name="speed"
                onChange={handleChange}
              />
              {/* <span> {input.speed}</span> */}
            </div>
            <div>
              <label>Height</label>
              <input
                type="range"
                min="0"
                max="500"
                value={input.height}
                name="height"
                onChange={handleChange}
              />
              {/* <span> {input.height}</span> */}
            </div>
            <div>
              <label>Weight</label>
              <input
                type="range"
                min="0"
                max="500"
                value={input.weight}
                name="weight"
                onChange={handleChange}
              />
              {/* <span> {input.weight}</span> */}
            </div>
            <div>
              <label>* Types </label>
              <select
                value="default"
                onChange={(event) => handleSelect(event)}>
                <option
                  disabled
                  value="default">
                  Select Types
                </option>
                {input.types.length < 2 ? (
                  types.map((type) => (
                    <option
                      value={type.name}
                      key={type.name}>
                      {type.name.toUpperCase()}
                    </option>
                  ))
                ) : (
                  <option
                    value="full"
                    disabled>
                    You can only choose 2 types
                  </option>
                )}
              </select>
              {errors.types && <p className="error">{errors.types}</p>}
            </div>
            <br />
            <p></p>
            <p>* Required fields</p>
            <button
              className="submit-button"
              // disabled={!errors.length === 0 && !input.name.length && !input.types.length > 0}
              disabled={Object.keys(errors).length > 0}
              type="submit">
              Submit
            </button>

            <Link to="/home">
              <button
                className="submit-button"
                type="submit">
                Cancel
              </button>
            </Link>
          </form>
        </div>
        <div className="container-cards">
          <div className="container-image">
            <h2> {input.name || "Name"}</h2>
            {input.image && (
              <div>
                <img
                  src={input.image}
                  alt="Image not found"
                />
              </div>
            )}
          </div>
          <div className="container-info">
            <h2 className="stats"> Stats </h2>
            <p className="stats">HP: {input.hp}</p>
            <p className="stats">Attack: {input.attack}</p>
            <p className="stats">Defense: {input.defense}</p>
            <p className="stats">Speed: {input.speed}</p>
            <p className="stats">Height: {input.height}</p>
            <p className="stats">Weight: {input.weight}</p>
            <h2 className="stats"> Type </h2>
            <div>
              {input.types.map((selected) => (
                <div key={selected}>
                  <p>{selected.toUpperCase()}</p>

                  <button
                    className="delete-button"
                    id={selected}
                    onClick={handleClick}>
                    ❌
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
