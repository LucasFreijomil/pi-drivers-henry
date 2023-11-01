import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from 'react';
import Styles from '../CardList/CardList.module.css'

const Pagination = ({ driversPerPage, totalDrivers, paginate, currentPage }) => {
    const totalPages = Math.ceil(totalDrivers / driversPerPage);
    const pageIndexs = [];
  
    for (let i = 1; i <= totalPages; i++) {
        pageIndexs.push(i);
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
            if (currentPage < pageIndexs.length) {
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
  
  
  
  
  