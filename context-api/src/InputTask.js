import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const InputTask = () => {
  const ctx = useContext(TodoContext);

  // console.log(ctx);
  const { tareas, setTareas } = ctx;

  const [value, setValue] = useState('');

  const changeValue = (ev) => {
    setValue(ev.target.value);
  };

  const guardar = () => {
    setTareas([...tareas, value]);
    console.log('guardar' + value);
  };

  return (
    <>
      <input type='text' value={value} onChange={changeValue} />
      <button onClick={guardar}>Guardar</button>
    </>
  );
};

export default InputTask;
