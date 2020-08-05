import React from 'react';
import Task from "../task";
import '../../../css/Card.css';

function Card(props) {
    const {subject, tasks, move} = props;
    return (
        <div className='card'>
            <div className='title'>{subject}</div>
            {
                tasks.map(task => {
                    return <Task remove={props.remove} key={task.id} title={task.title} subject={subject} id={task.id} move={move} created={task.created} assignee={task.assignee} priority={task.priority}/>
                })
            }

        </div>
    );
}

export default Card;
