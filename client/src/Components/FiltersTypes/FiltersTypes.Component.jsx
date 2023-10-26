import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTypes, getPokemonsFilterByTypes } from "../../Redux/actions";
import "./FiltersTypes.Styles.css";

const FiltersTypes = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const onFiltersTypes = (event) => {
    dispatch(getPokemonsFilterByTypes(event.target.value));
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <label htmlFor="filter" className="label">
      <select
        name="filter"
        onChange={onFiltersTypes}
        className="select"
        >
        <option value="all">All Types</option>
        {types &&
          types.map((type) => {
            return (
              <option
                value={type.name}
                key={type.name}>
                {type.name.toUpperCase()}
              </option>
            );
          })}
      </select>
    </label>
  );
};

export default FiltersTypes;
