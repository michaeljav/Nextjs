// import React from 'react';
//navegation for router
import { useRouter } from 'next/navigation';

export const TaskCard = ({ task }) => {
  // const TaskCard = ({ task }) => {
  console.log(task);
  const router = useRouter();

  return (
    <div
      style={{ background: '#202020', color: 'white' }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <button>Delete</button>
      <p>{task.description}</p>
    </div>
  );
};

// export default TaskCard;
