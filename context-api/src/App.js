import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoContext } from './TodoContext';
import InputTask from './InputTask';
import List from './List';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        tareas,
        setTareas,
      }}
    >
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <InputTask />
          <List />
        </header>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
