import React from 'react';
import style from './form.module.css';
import Input from "../1-component/input/input";
import Button from "../1-component/buttom/button";
import Balance from "../1-component/balance/balance";
import HandlerForm from "../3-service/handlerForm";
import Table from "../1-component/table/table";
import PaginationComponent from "../1-component/pagination/pagination";
import {getAccountById} from "../3-service/rest";

const Form = () => {

    const account = HandlerForm();
    const startDate = HandlerForm();
    const endDate = HandlerForm();
    const operatorName = HandlerForm();

    const [balance, setBalance] = React.useState();
    const [transactions, setTransactions] = React.useState();
    const [page, setPage] = React.useState(1);
    const [max, setMax] = React.useState(1);

    async function getBalance(value) {
        const accountData = await getAccountById(account.value, value);
        setTransactions(accountData.data.transfers);
        setMax(Math.ceil(accountData.headers.get('x-total-count') / 4));
    }

    async function changePage(event, value) {
        setPage(value);
        await getBalance(value);
    }

    function handleSubmit(event) {
        getBalance(page);
    }

    return (
        <div className={style.container}>
            <h2>Form</h2>
            <p>
                lorem ipsum dolor sit amet
            </p>
            <div className={style.header}>
                <Input label={'Numero da conta: '} type={'text'} size={4} {...account}/>
                <Input label={'Data de início: '} type={'date'}/>
                <Input label={'Data de fim: '} type={'date'}/>
                <Input label={'Nome do operador transacionado: '} type={'text'}/>
                <Button onClick={() => handleSubmit()} value={'Buscar'}/>
            </div>
            <Balance total={balance} current={balance}/>
            <Table data={transactions}/>
            <PaginationComponent max={max} page={page} onChange={(event, value) => changePage(event, value)}/>
        </div>
    );

}

export default Form