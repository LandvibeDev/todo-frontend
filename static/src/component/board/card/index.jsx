import React from 'react';
import Task from "../task";
import '../../../css/Card.css';

function Card(props) {
    const {subject, tasks, move, remove} = props;
    return (
        <div className='card'>
            <div className='title'>{subject}</div>
            {
                tasks.map(task => {
                    return <Task key={task.id} title={task.title} priority={task.priority} assignee={task.assignee}
                                 subject={subject} id={task.id} created={task.created} move={move} remove={remove}/>
                })
            }

        </div>
    );
}

export default Card;
