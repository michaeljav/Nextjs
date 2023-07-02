'use client';
import { useEffect, useState } from 'react';
import { useTasksContext } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';

const Page = ({ params }) => {
  const [task, setTask] = useState({ id: '', title: '', description: '' });
  //call funciton  from context
  const { tasks, createTask } = useTasksContext();
  const router = useRouter();

  console.log(params);
  console.log(tasks);
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
    } else {
      createTask(task.title, task.description);
    }
    router.push('/');
  };

  useEffect(() => {
    //if id exists is editing task
    if (params.id) {
      //search task
      const { id, title, description } = tasks.find(
        (task) => task.id === params.id
      );
      // console.log('params.id', params.id);
      console.log('taskFound', id);
      if (id) {
        setTask({ title, description });
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Write a title'
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name='description'
        placeholder='write a description'
        cols='30'
        rows='10'
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>save</button>
    </form>
  );
};

export default Page;
