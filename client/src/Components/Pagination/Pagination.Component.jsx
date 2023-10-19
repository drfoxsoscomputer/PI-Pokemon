import { useSelector, useDispatch } from "react-redux";

import { setIndexPage } from "../../Redux/actions";
import "./Pagination.Styles.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const indexPage = useSelector((state) => state.indexPage);
  const quantityPages = useSelector((state) => state.quantityPages);
  // const updatedShowPokemons = useSelector((state) => state.updatedShowPokemons);

  const handlePageChange = (event) => {
    let direction = event.target.value;
    let index = direction === "+" ? indexPage - 1 : indexPage + 1;
    dispatch(setIndexPage(index));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let maxPageNumbers = 3;

    const startPage = Math.min(Math.max(1, indexPage - Math.floor(maxPageNumbers / 2)), quantityPages - maxPageNumbers + 1);

    for (let i = startPage; i < startPage + maxPageNumbers; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => dispatch(setIndexPage(i))}
          className={indexPage === i ? "pagination-button active" : "pagination-button"}>
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div>
        <button
          className="first-button pagination-button"
          onClick={() => dispatch(setIndexPage(1))}
          disabled={indexPage === 1}>
          First
        </button>
        <button
          className="pagination-button"
          onClick={handlePageChange}
          value={"+"}
          disabled={indexPage === 1}>
          Previous
        </button>

        {renderPageNumbers()}
        <button
          className="pagination-button"
          onClick={handlePageChange}
          value={"-"}
          disabled={indexPage === quantityPages}>
          Next
        </button>

        <button
          className="last-button pagination-button"
          onClick={() => dispatch(setIndexPage(quantityPages))}
          disabled={indexPage === quantityPages}>
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
