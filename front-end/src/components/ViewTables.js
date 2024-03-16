import React from 'react';
import './bookings.css'
import TableView from './TableView';
import Paging from './paging';
const ViewTables = ({ bookings }) => {
    //const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    // const pageSize = 10;
    // setTotalPages(Math.ceil(bookings.length / pageSize));
    // const indexOfLastItem = currentPage * pageSize;
    // const indexOfFirstItem = indexOfLastItem - pageSize;
    // const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);
    // const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <TableView pageData={bookings} />
            {/* <Paging
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            /> */}
        </div>
    );
}
export default ViewTables;
