import React from 'react';
import Pagination from '@mui/material/Pagination';
import style from './pagination.module.css'

const PaginationComponent = ({
                                 max,
                                 page,
                                 onChange,
                             }) => {
    return (
        <div className={style.page}>
            <Pagination
                count={max}
                page={page}
                onChange={onChange}
                showFirstButton
                showLastButton
                variant="outlined" shape="rounded"
            />
        </div>);
}

export default PaginationComponent;
