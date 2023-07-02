'use client';

import { useTasksContext } from '../context/TasksContext';
//export
import { TaskCard } from '../components/TaskCard';
//export default
// import TaskCard from '../components/TaskCard';

const Page = () => {
  const { tasks } = useTasksContext();
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Page;
