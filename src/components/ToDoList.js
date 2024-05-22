import React from 'react';
import TodoItem from './ToDoItem';
import empty from '../static/empty.png';
import './ToDoList.css';

function TodoList({ tasks, deleteTask, toggleCompleted, taskCounter }) {
  return (
    <div className="todo-list">
      <div style={{ display: taskCounter === 0 ? 'block' : 'none' }}>
        <img src={empty} alt="empty"></img>
        <h3 style={{ fontWeight: 500 }}>Empty...</h3>
      </div>
      <div className="todo-list-table">
        <table frame="void" rules="rows">
          <tbody>
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
