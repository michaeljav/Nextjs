'use client';
import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
//where is stored the data
export const TaskContext = createContext();

export const useTasksContext = () => {
  //getting data from the store TaskContext
  const context = useContext(TaskContext);

  if (!context) throw new Error('useTask must be sed within a  provider');
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: 'My first task',
      description: 'some  first description',
    },
    {
      id: 2,
      title: 'My second task',
      description: 'some  second description',
    },
    {
      id: 3,
      title: 'My Third task',
      description: 'some  Third description',
    },
  ]);

  const createTask = (title, description) => {
    setTask([...tasks, { title, description, id: uuid() }]);
  };

  return (
    <TaskContext.Provider value={{ tasks: tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// export default TaskProvider;
