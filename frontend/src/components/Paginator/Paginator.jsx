import ReactPaginate from 'react-paginate';
import { PaginateContainer } from './Paginator.styled';

export const Paginator = ({ totalCount, setPage }) => {
  const handlePageChange = (e) => {
    setPage(e.selected + 1);
  };

  const pageCount = Math.ceil(totalCount / 5);

  return (
    <PaginateContainer>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        previousLabel={null}
        breakLabel={null}
        nextLabel={null}
        className="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeLinkClassName="selected-page-link"
      />
    </PaginateContainer>
  );
};
