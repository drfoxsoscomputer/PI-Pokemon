import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderPokemonsByName } from "../../Redux/actions";

import "./FilterOrder.Styles.css";

const FilterOrder = () => {
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState(true);

  const handleOrderByName = (ascending) => {
    dispatch(orderPokemonsByName(ascending));
    setSelectedOrder(ascending);
  };

  return (
    <div>
      <button 
      className={selectedOrder ? "selected first-button" : "first-button"}
      onClick={() => handleOrderByName(true)}>Sort A → Z</button>
      <button 
          className={!selectedOrder ? "selected last-button" : "last-button"}
      onClick={() => handleOrderByName(false)}>Sort Z → A</button>
    </div>
  );
};

export default FilterOrder;