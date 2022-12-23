import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({
                                 max,
                                 page,
                                 onChange,
                             }) => {
    return (
        <Pagination
            count={max}
            page={page}
            onChange={onChange}
            showFirstButton
            showLastButton
        />);
}

export default PaginationComponent;
