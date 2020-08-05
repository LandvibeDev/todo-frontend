import React from 'react';
import '../../../css/Task.css';

import {isDone, isTodo, toToggledValue} from "../../../utility/status";
import Button from "../../atom/Button";

function Task(props) {
    const {title, subject, id, move, created, assignee, priority} = props;
    const onClick = (event) => {
        event.stopPropagation();
        const toggledValue = toToggledValue(subject);
        move(id, toggledValue); //board에서 정의해놓은 함수가 실행된다.
    };

    function handle(event) {
        // x 클릭하면 task 삭제 하기
        const remove = props.remove;  //props로 전달받은 remove를 받는다.
        remove(id);
    }

    return (
        <div className='task'>
            title : {title}<br/>
            {priority}순위<br/>
            assignee : {assignee}<br/>
            date : {created}
            {
                isDone(subject)
                && <Button className='task-right-btn' onClick={onClick} value='<'/>
            }
            {<Button className='task-remove-btn' onClick={handle} value='X'/>}
            {
                isTodo(subject)
                && <Button className='task-left-btn' onClick={onClick} value='>'/>

            }

        </div>
    );
}

export default React.memo(Task, (prev, next) => prev.subject === next.subject);
