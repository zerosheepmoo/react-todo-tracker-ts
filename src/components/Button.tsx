import React, { FunctionComponent } from 'react';
import { ButtonProps } from '../model/Props';

const Button:FunctionComponent<ButtonProps> = ({ color = 'steelblue', text, onClick }) => {
    return (
        <button
            className='btn'
            style={{ backgroundColor: color }}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
