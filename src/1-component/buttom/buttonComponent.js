import React from 'react';

const ButtonComponent = ({ type, value, onClick, className }) => {
    return (
        <div className={className}>
            <button type={type} onClick={onClick}>
                {value}
            </button>
        </div>
    );
}

export default ButtonComponent