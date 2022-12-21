import React from 'react';
import style from './form.module.css';
import InputComponent from "../1-component/input/inputComponent";
import ButtonComponent from "../1-component/buttom/buttonComponent";
import HandlerForm from "../3-service/handlerForm";
import {getOperatorName} from "../3-service/rest";

const form = () => {

    const account = HandlerForm();
    const startDate = HandlerForm();
    const endDate = HandlerForm();
    const operatorName = HandlerForm();

    return (
        <div className={style.container}>
            <h2>Form</h2>
            <p>
                lorem ipsum dolor sit amet
            </p>
            <div className={style.header}>
                <InputComponent label={'Numero da conta: '} type={'text'} size={4}/>
                <InputComponent label={'Data de início: '} type={'date'}/>
                <InputComponent label={'Data de fim: '} type={'date'}/>
                <InputComponent label={'Nome do operador transacionado: '} type={'text'}/>
                <ButtonComponent onClick={() => getOperatorName()} label={'Pesquisar'}/>
            </div>
        </div>
    );

}


export default form