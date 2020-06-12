import React from 'react';
import '../../css/Button.css'

function Button(props) {
    const {className, onClick, value} = props;
    const buttonClasses = ['button', className].join(' ');
    return (
        onClick ?
            <button className={buttonClasses} onClick={onClick}>
                {value}
            </button>
            :
            <button className={className}>
                {value}
            </button>
    );
}

export default Button;
