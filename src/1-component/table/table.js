import React from 'react';
import DataTable from 'react-data-table-component';
import "./table.css";

const Table = ({
                   data,
               }) => {

    const columns = [
        {
            name: 'Dados',
            selector: row => row.transferDate,
        },
        {
            name: 'Valor ',
            selector: row => row.value,
        },
        {
            name: 'Tipo ',
            selector: row => row.type,
        },
        {
            name: 'Nome do Operador ',
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