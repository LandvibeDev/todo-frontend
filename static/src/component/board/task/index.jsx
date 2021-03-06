import React from 'react';
import '../../../css/Task.css';

import {isDone, isTodo, toToggledValue} from "../../../utility/status";
import Button from "../../atom/Button";

function Task(props) {
    const {title, subject, id, move} = props;
    const onClick = (event) => {
        event.stopPropagation();
        const toggledValue = toToggledValue(subject);
        move(id, toggledValue);
    };

    return (
        <div className='task'>
            {
                isTodo(subject) && <Button className='task-left-btn' onClick={onClick} value='>'/>
            }
            {title}
            {
                isDone(subject) && <Button className='task-right-btn' onClick={onClick} value='<'/>
            }
        </div>
    );
}

export default React.memo(Task, (prev, next) => prev.subject === next.subject);
