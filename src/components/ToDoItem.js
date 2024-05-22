import React, { useState } from 'react';
import trash from '../static/trash.svg';
import './ToDoItem.css';

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <tr>
      <div
        className="todo-item"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <label class="container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
          />
          <span class="checkmark"></span>
        </label>
        <div className="text">
          <p
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : '',
            }}
          >
            {task.text}
          </p>
        </div>
        <button
          onClick={() => deleteTask(task.id)}
          style={{ display: hidden ? 'none' : 'block' }}
        >
          <img src={trash} alt="delete"></img>
        </button>
      </div>
    </tr>
  );
};

export default TodoItem;
