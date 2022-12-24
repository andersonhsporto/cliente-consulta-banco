import React from 'react';

const HandleInput = (props) => {
    const [value, setValue] = React.useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
};

export default HandleInput;