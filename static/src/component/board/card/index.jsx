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
                    return <Task key={task.id} title={task.title} assignee={task.assignee} priority={task.priority} subject={subject} id={task.id} move={move}/>
                })
            }

        </div>
    );
}

export default Card;
