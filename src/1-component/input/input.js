import React from "react";
import style from './input.module.css'

const Input = ({
                   type,
                   placeholder,
                   value,
                   onChange,
                   name,
                   className,
                   label,
                   error,
                   size
               }) => {
    return (
        <div className={style}>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                size={size}
            />
            {error && <span>{error}</span>}
        </div>
    );
};

export default Input;