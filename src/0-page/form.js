import React from 'react';
import style from './form.module.css';
import Input from "../1-component/input/input";
import Button from "../1-component/buttom/button";
import Balance from "../1-component/balance/balance";
import HandlerForm from "../2-service/handlerForm";
import Table from "../1-component/table/table";
import PaginationComponent from "../1-component/pagination/pagination";
import {factoryRestRequest, getRequest} from "../2-service/rest";

const Form = () => {

    const account = HandlerForm();
    const startDate = HandlerForm();
    const endDate = HandlerForm();
    const operatorName = HandlerForm();

    const [balance, setBalance] = React.useState();
    const [transactions, setTransactions] = React.useState();
    const [page, setPage] = React.useState(1);
    const [max, setMax] = React.useState(1);

    async function makeRequest(value) {
        let restRequest = factoryRestRequest(
            account.value,
            value,
            operatorName.value,
            startDate.value,
            endDate.value
        );

        const accountData = await getRequest(restRequest);
        setTransactions(accountData.data.transfers);
        setBalance(accountData.data.balance);
        setMax(Math.ceil(accountData.headers.get('x-total-count') / 4));
    }

    async function changePage(event, value) {
        setPage(value);
        await makeRequest(value);
    }

    function handleSubmit(event) {
        makeRequest(page);
    }

    return (
        <div className={style.container}>
            <h2>Form</h2>
            <p>
                lorem ipsum dolor sit amet
            </p>
            <div className={style.header}>
                <Input label={'Numero da conta: '} type={'text'} size={4} {...account}/>
                <Input label={'Data de início: '} type={'date'} {...startDate}/>
                <Input label={'Data de fim: '} type={'date'} {...endDate}/>
                <Input label={'Nome do operador transacionado: '} type={'text'} {...operatorName}/>
                <Button onClick={() => handleSubmit()} value={'Buscar'}/>
            </div>
            <Balance total={balance} current={balance}/>
            <Table data={transactions}/>
            <PaginationComponent max={max} page={page} onChange={(event, value) => changePage(event, value)}/>
        </div>
    );
}

export default Form