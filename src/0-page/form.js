import React from 'react';
import style from './form.module.css';
import InputComponent from "../1-component/input/inputComponent";
import ButtonComponent from "../1-component/buttom/buttonComponent";
import BalanceComponent from "../1-component/balance/balanceComponent";
import HandlerForm from "../3-service/handlerForm";
import {getAccountById, getOperatorName} from "../3-service/rest";

const Form = () => {

    const account = HandlerForm();
    const startDate = HandlerForm();
    const endDate = HandlerForm();
    const operatorName = HandlerForm();

    const [balance, setBalance] = React.useState();

    async function getBalance() {
        console.log(account.value);
        const accountData = await getAccountById(account.value);
        console.log(accountData.data.balance);

        setBalance(accountData.data.balance);




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
        </div>
    );

}


export default Form