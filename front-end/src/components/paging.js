import React from 'react';

const paging = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(n => n + 1); // Create an array of page numbers

    return (
        <div>
            {pages.map(page => (
                <button
                    key={page}
                    disabled={currentPage === page}
                    // onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default paging;
