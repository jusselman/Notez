import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Task from './Task';
import TextField from './TextField';


function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  }

  function deleteTask(id) {
    setTasks(prevTasks => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="app-container">
      <Header />
      <TextField
        onAdd={addTask}
      />
      {tasks.map((taskItem, index) => {
        return <Task
          key={index}
          id={index}
          title={taskItem.title}
          content={taskItem.content}
          onDelete={deleteTask}
        />
      })}
      <Footer />
    </div>

  );
}

export default App;
