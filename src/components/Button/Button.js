import React from 'react';

const Button = ({ children, style, ...props } /* props */) => {
    // console.log('style is', style)
    // props.children -> delete || Add headline
    const buttonStyle = {
        padding: 15,
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'blue',
        color: 'white',
        ...style
    };
    return (
        <button style={buttonStyle} {...props}> 
            { children }
        </button>
    );
}

export default Button;
