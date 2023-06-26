'use client';

import { useTasks } from '../../context/TasksContext';

const page = () => {
  const value = useTasks();

  console.log(value.tasks);
  return <div>About page</div>;
};

export default page;
