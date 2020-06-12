import React from 'react';
import '../../../css/Task.css';

import isDone from "../../../utility/isDone";
import Button from "../../atom/Button";

function Task(props) {
    const {title, subject, id, move} = props;
    const onClick = (event) => {
        event.stopPropagation();
        move(id)
    };

    return (
        <div className='task'>
            {title}
            {
                !isDone(subject) && <Button className='task-btn' onClick={onClick} value='>'/>
            }
        </div>
    );
}

export default Task;
