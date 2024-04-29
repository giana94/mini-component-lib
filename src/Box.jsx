import React from 'react';
import './box.css'; 

const Box = (props) => {

    const sizes = {
    small: "box-small",
    medium: "box-medium",
    large: "box-large"
    };


    const roundedCorners = props.round ? "rounded" : "";
    const boxStyle = `box ${sizes[props.size]} ${roundedCorners}`;

    return (
        <div className={boxStyle}>
        {props.children}
        </div>
    );
};

export default Box;
