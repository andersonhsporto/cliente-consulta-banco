import React from 'react';
import style from './buttom.module.css';


const Button = ({type, value, onClick}) => {
    return (
        <button className={style.container} type={type} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button