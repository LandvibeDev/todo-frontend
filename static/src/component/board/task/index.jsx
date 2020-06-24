import React from 'react';
import '../../../css/Task.css';

import { isDone, isTodo, toToggledValue } from '../../../utility/status';
import Button from '../../atom/Button';
import { toText } from '../../../utility/priority';

function Task(props) {
  const {
    title, assignee, priority, created, subject, id, move, remove,
  } = props;

  const onClick = (event) => {
    event.stopPropagation();
    const toggledValue = toToggledValue(subject);
    move(id, priority, toggledValue);
  };

  const onRemovalClick = (event) => {
    event.stopPropagation();
    const toggledValue = toToggledValue(subject);
    remove(id, toggledValue);
  };

  return (
    <div className="task">
      <Button className="task-removal-btn" onClick={onRemovalClick} value="X" />
      {
                isTodo(subject) && <Button className="task-left-btn" onClick={onClick} value=">" />
            }
      {
                isDone(subject) && <Button className="task-right-btn" onClick={onClick} value="<" />
            }
      <div>
        {title}
        {' '}
        {toText(priority)}
      </div>
      <div>
        {assignee}
        {' '}
        {created}
      </div>
    </div>
  );
}

export default React.memo(Task, (prev, next) => prev.subject === next.subject);
