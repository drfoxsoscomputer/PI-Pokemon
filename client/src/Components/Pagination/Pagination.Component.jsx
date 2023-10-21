import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../Redux/actions";
import "./Pagination.Styles.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  const startHandler = () => {
    dispatch(setCurrentPage(1));
  };

  const previousHandler = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const goTohandler = (page) => {
    dispatch(setCurrentPage(page));
  };

  const nextHandler = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const endHandler = () => {
    dispatch(setCurrentPage(totalPages));
  };

  return (
    <div className="pagination-container">
      <div>
        <button
          className={`first-button pagination-button ${currentPage === 1 ? "active" : ""}`}
          onClick={startHandler}
          disabled={currentPage <= 1}>
          <span>First</span>
        </button>

        <button
          className="pagination-button"
          onClick={previousHandler}
          disabled={currentPage <= 1}>
          <span>Previous</span>
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`pagination-button ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => goTohandler(pageNumber)}>
            {pageNumber}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={nextHandler}
          disabled={currentPage === totalPages}>
          <span>Next</span>
        </button>

        <button
          className={`last-button pagination-button ${currentPage === totalPages ? "active" : ""}`}
          onClick={endHandler}
          disabled={currentPage === totalPages}>
          <span>Last</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
