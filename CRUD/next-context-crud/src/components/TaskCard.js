// import React from 'react';
//navegation for router
import { useRouter } from 'next/navigation';
//import context and from context import taskscontext (useTasksContext) store
// that content this tasks array, createTask function,deleteTask function
import { useTasksContext } from '../context/TasksContext.js';
export const TaskCard = ({ task }) => {
  // const TaskCard = ({ task }) => {
  // console.log(task);
  const router = useRouter();
  const { deleteTask } = useTasksContext();
  return (
    <div
      style={{ background: '#202020', color: 'white' }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <button
        onClick={(e) => {
          //sin esta opcion se me ejecuta el evento click que tiene el padri div
          e.stopPropagation();
          const accept = window.confirm('Are you sure ?');
          if (accept) deleteTask(task.id);
        }}
      >
        Delete
      </button>
      {/* <button onClick={() => router.push(`/edit/${task.id}`)}>edit</button> */}
      <p>{task.description}</p>
    </div>
  );
};

// export default TaskCard;
