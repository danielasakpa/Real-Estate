import { useCallback } from 'react';

const usePaginate = (totalPages, setCurrentPage) => {

  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    },
    [totalPages, setCurrentPage]
  );

  return {
    handlePageChange,
    totalPages,
  };
};

export default usePaginate;
