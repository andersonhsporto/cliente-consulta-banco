import React from "react";

const InputComponent = ({
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
        <div className={className}>
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

export default InputComponent;