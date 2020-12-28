import React from 'react';

const initialData = {
  task: [],
  setTask: () => {},
};

export const TodoContext = React.createContext(initialData);
