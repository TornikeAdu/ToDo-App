import React, { useState } from 'react';
import Search from './components/Search';
import TodoList from './components/ToDoList';
import Popup from 'reactjs-popup';
import AddButton from './static/Add-button.svg';
import 'reactjs-popup/dist/index.css';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', completed: false },
    { id: 2, text: 'Meeting at School', completed: false },
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  let [taskCounter, setTaskCounter] = useState(tasks.length);
  let counter = tasks.length;

  const getFilteredTasks = () => {
    let filteredTasks = tasks;
    if (filter === 'complete') {
      filteredTasks = tasks.filter((task) => task.completed);
    } else if (filter === 'incomplete') {
      filteredTasks = tasks.filter((task) => !task.completed);
    }
    if (searchTerm) {
      filteredTasks = filteredTasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filteredTasks;
  };

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setTaskCounter(counter + 1);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTaskCounter(counter - 1);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <div className="App">
      <main className="App-main">
        <h1>TODO LIST</h1>
        <Search
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
        <TodoList
          tasks={getFilteredTasks()}
          addTask={addTask}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          taskCounter={taskCounter}
        />
        <div className="add-button">
          <Popup
            trigger={
              <button className="btn">
                <img src={AddButton} alt="Add Task"></img>
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="header">New Note</div>
                <input
                  placeholder="Input our note..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="actions">
                  <button className="button" onClick={close}>
                    Cancel
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      handleAddTask(text);
                      close();
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </main>
    </div>
  );
};

export default App;
