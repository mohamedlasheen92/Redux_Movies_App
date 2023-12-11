import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { getPage } from '../store/pageAction';

export const PaginationC = () => {
  const dispatch = useDispatch();

  const handlePage = (dataObj) => {
    dispatch(getPage(dataObj.selected + 1));
  }
  const pageCount = useSelector((state) => state.pageCount);

  return (
    <>

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Prev"
        pageCount={pageCount}
        // pageRangeDisplayed={3}
        // marginPagesDisplayed={1}
        onPageChange={handlePage}

        containerClassName='pagination w-100 justify-content-center my-5'
        pageClassName='page-item'
        pageLinkClassName='page-link'

        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'

        activeClassName='active'

      />




    </>
  )
}
