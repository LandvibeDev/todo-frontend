import React from 'react';
import Task from '../task';
import '../../../css/Card.css';

function Card(props) {
  const {
    subject, tasks, move, remove,
  } = props;
  return (
    <div className="card">
      <div className="title">{subject}</div>
      {
                tasks.map((task) => (
                  <Task
                    key={task.id}
                    title={task.title}
                    assignee={task.assignee}
                    priority={task.priority}
                    created={task.created}
                    subject={subject}
                    id={task.id}
                    move={move}
                    remove={remove}
                  />
                ))
            }
    </div>
  );
}

export default Card;
