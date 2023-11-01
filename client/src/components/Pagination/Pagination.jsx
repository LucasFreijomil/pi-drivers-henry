import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import React from "react";
import Styles from "../../views/Home/Home.module.css";

const Pagination = ({ totalPages, paginate, currentPage }) => {
  return (
    <div className={Styles.pagination}>
      <button
        onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1);
          }
        }}
        className={Styles.paginButtons}
      >
        <MdKeyboardDoubleArrowLeft /> Prev
      </button>
      <button
        onClick={() => {
          if (currentPage < totalPages) {
            paginate(currentPage + 1);
          }
        }}
        className={Styles.paginButtons}
      >
        Next <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
