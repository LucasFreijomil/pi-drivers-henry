import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from 'react';
import Styles from '../CardList/CardList.module.css'

const Pagination = ({ driversPerPage, totalDrivers, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalDrivers / driversPerPage); i++) {
      pageNumbers.push(i);
    }
  
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
            if (currentPage < pageNumbers.length) {
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
  
  
  
  
  