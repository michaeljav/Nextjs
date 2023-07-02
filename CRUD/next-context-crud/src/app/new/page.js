'use client';
import { useState } from 'react';
import { useTasksContext } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [task, setTask] = useState();
  //call funciton  from context
  const { createTask } = useTasksContext();
  const router = useRouter();
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Write a title'
        onChange={handleChange}
      />
      <textarea
        name='description'
        placeholder='write a description'
        cols='30'
        rows='10'
        onChange={handleChange}
      ></textarea>
      <button>save</button>
    </form>
  );
};

export default Page;
