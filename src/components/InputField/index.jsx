import React from 'react';

const Input = ({ type, changed, className, keyPress }) => {
    return (
        <input 
            type={type} 
            onChange={changed}
            className={className}
            onKeyPress={keyPress}
            placeholder="Enter text here!"
            />
    )
}

export default Input;