import React from 'react';
import style from './form.module.css';
import InputComponent from "../1-component/input/inputComponent";
import ButtonComponent from "../1-component/buttom/buttonComponent";
import BalanceComponent from "../1-component/balance/balanceComponent";
import HandlerForm from "../3-service/handlerForm";
import {getAccountById} from "../3-service/rest";
import Table from "../1-component/table/table";

const Form = () => {

    const account = HandlerForm();
    const startDate = HandlerForm();
    const endDate = HandlerForm();
    const operatorName = HandlerForm();

    const [balance, setBalance] = React.useState();
    const [transactions, setTransactions] = React.useState();

    async function getBalance() {
        const accountData = await getAccountById(account.value);
        console.log(accountData.data);
        console.log("DTO " + accountData.data.transfers);
        setBalance(accountData.data.balance);
        setTransactions(accountData.data.transfers);
    }

    function handleSubmit(event) {
        getBalance();
    }

    return (
        <div className={style.container}>
            <h2>Form</h2>
            <p>
                lorem ipsum dolor sit amet
            </p>
            <div className={style.header}>
                <InputComponent label={'Numero da conta: '} type={'text'} size={4} {...account}/>
                <InputComponent label={'Data de início: '} type={'date'}/>
                <InputComponent label={'Data de fim: '} type={'date'}/>
                <InputComponent label={'Nome do operador transacionado: '} type={'text'}/>
                <ButtonComponent onClick={() => handleSubmit()} label={'Pesquisar'}/>
            </div>
            < BalanceComponent total={balance} current={balance}/>
            < Table data={transactions} />
        </div>
    );

}

export default Form