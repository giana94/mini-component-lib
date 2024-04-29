import React from 'react';
import './text.css';

const Text = (props) => {

    const sizeClassName = props.size ? `text-${props.size}` : '';
    const colorClassName = props.color ? `text-${props.color}` : ''; 
    const className = `text ${sizeClassName} ${colorClassName}`;


    return (
        <div className={className}>
            {props.children}
        </div>
    );
};

export default Text;
