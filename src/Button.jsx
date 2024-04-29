import React from 'react';
import './button.css'; 


const Button = (props) => {

    const { color, onClick } = props;

    return (
        <button className="button" style={{ backgroundColor: color }} onClick={onClick}>
            {props.children}
        </button>
    );
};

export default Button;
