import { useContext } from "react";
import { TourContext } from "../context/TourManagement";

function Pagination() {
  const { page, setPage } = useContext(TourContext);
  return (
    <div className="pagination">
      <button
        className={`pagination__btn ${page === 1 ? "disabled__btn" : ""}`}
        onClick={() => {
          setPage(() => {
            return 1;
          });
        }}>
        1
      </button>
      <button
        className={`pagination__btn ${page === 2 ? "disabled__btn" : ""}`}
        onClick={() => {
          setPage(() => {
            return 2;
          });
        }}>
        2
      </button>
    </div>
  );
}

export default Pagination;
