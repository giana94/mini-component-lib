import React, { useState } from 'react';
import Box from './Box.jsx';
import Text from './Text.jsx';
import Button from './Button.jsx';

function MyAwesomeComponents() {

    const [buttonColor, setButtonColor] = useState('');

    const handleClick = () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        setButtonColor(randomColor);
        alert('button clicked!');
    };

    return (
        <>
            <div className='components'>
                <Box size="medium" round>
                    <Text size="medium" color="blue">Medium Box and Text</Text>
                    <Button color={buttonColor} onClick={handleClick}>
                        Click to change color!
                    </Button>
                </Box>
                <Box size="small">
                    <Text size="small" color="green">small box and Text</Text>
                </Box>
                <Box size="large">
                    <Text size="large" color="purple">Large box and Text</Text>
                </Box>
            </div>
        </>
    )
}

export default MyAwesomeComponents;
