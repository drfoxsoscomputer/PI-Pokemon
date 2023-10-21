import { useDispatch } from "react-redux";
import { resetFilters } from "../../Redux/actions";

import "./FilterReset.Styles.css";

const ResetFilters = () => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div>
      <button
        className="reset-button"
        onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default ResetFilters;
