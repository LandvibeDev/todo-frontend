import React from 'react';
import '../../../css/Task.css';

import {isDone, isTodo, toToggledValue} from "../../../utility/status";
import Button from "../../atom/Button";

function Task(props) {
    const {title, subject, id, created, move, remove} = props;
    const onClick = (event) => {
        event.stopPropagation();
        const toggledValue = toToggledValue(subject);
        move(id, toggledValue);
    };
    function handle(event) {
        remove(id);
    }

    return (
        <div className='task'>
            {
                isTodo(subject) && <Button className='task-left-btn' onClick={onClick} value='>'/>
            }
            {title} <br/>
            {created}
            {
                isDone(subject) && <Button className='task-right-btn' onClick={onClick} value='<'/>
            }
            <Button className='task-remove-btn' onClick={handle} value='X'/>
        </div>
    );
}

export default React.memo(Task, (prev, next) => prev.subject === next.subject);
