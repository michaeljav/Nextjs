'use client';
import { createContext, useContext } from 'react';

//where is stored the data
export const TaskContext = createContext();

export const useTasks = () => {
  //getting data from the store TaskContext
  const context = useContext(TaskContext);

  if (!context) throw new Error('useTask must be sed within a  provider');
  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [
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
  ];

  return (
    <TaskContext.Provider value={{ tasks: tasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// export default TaskProvider;
