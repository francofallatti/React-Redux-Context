import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const List = () => {
  const ctx = useContext(TodoContext);

  // console.log(ctx);
  const { tareas, setTareas } = ctx;

  return (
    <div>
      {tareas.map((tarea) => (
        <p>{tarea}</p>
      ))}
    </div>
  );
};

export default List;
