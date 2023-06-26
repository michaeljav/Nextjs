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
  const tasks = [12, 1, 1];

  return (
    <TaskContext.Provider value={{ tasks: tasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// export default TaskProvider;
