import React from 'react';

const TaskListElement = ({ name, done, handleClick }) => {
  return (
    <li
      onClick={handleClick}
      className='task-list-element'
      style={{ textDecoration: done ? 'line-through' : 'none' }}
    >
      {name}
    </li>
  );
};

export default TaskListElement;
