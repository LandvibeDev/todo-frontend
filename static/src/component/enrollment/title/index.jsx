import React from 'react';
import '../../../css/Enrollment.css'
import Button from "../../atom/Button";

function Title({id, title, dispatch}) {
    const onClick = (event) => {
        event.stopPropagation();
        dispatch({type: 'REMOVE', id, title});
    };

    return (
        <div className='buffer-item'>
            {title} &nbsp; <Button className='buffer-item-btn' onClick={onClick} value='X'/>
        </div>
    );
}

export default Title;
