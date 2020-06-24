import React from 'react';
import '../../css/Input.css';

function Input(props) {
  const {
    id, className, onChange, onKeyPress, value,
  } = props;
  const inputClasses = ['input', className].join(' ');
  return (
    <input id={id} className={inputClasses} onChange={onChange} onKeyPress={onKeyPress} value={value} />
  );
}

export default Input;
