import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`}>
      <p>{task.task}</p>
      <div className="icons">
        <FontAwesomeIcon icon={faCheck} onClick={toggleComplete} />
        <FontAwesomeIcon icon={faPenToSquare} onClick={editTodo} />
        <FontAwesomeIcon icon={faTrash} onClick={deleteTodo} />
      </div>
    </div>
  );
};
