import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({
                   data,
               }) => {

    const columns = [
        {
            name: 'Dados',
            selector: row => row.transferDate,
        },
        {
            name: 'Valentia ',
            selector: row => row.value,
        },
        {
            name: 'Tipo ',
            selector: row => row.type,
        },
        {
            name: 'Nome operador transacionado ',
            selector: row => row.operatorName,
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
}

export default Table;