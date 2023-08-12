'use client';

import React, { createContext, useEffect, useState } from 'react';

import { Button, Table } from '@/components/UI';

import DoneBoxTarget from './DoneBoxTarget';
import InProgressBoxTarget from './InProgressBoxTarget';
import TaskCard from './TaskCard';

export const CardContext = createContext({
  isDone: () => {},
  isInProgress: () => {},
});

const Tasks = () => {
  const [assignValue, setAssignValue] = useState('');
  const [assignValueTwo, setAssignValueTwo] = useState('');
  const [assignValueThree, setAssignValueThree] = useState('');

  const [titleValue, setTitleValue] = useState('');
  const [titleValueTwo, setTitleValueTwo] = useState('');
  const [titleValueThree, setTitleValueThree] = useState('');

  const items = [
    {
      id: 1,
      status: 'InProgress',
      priority: 'Low',
      title: titleValue,
      assign: assignValue,
      setAssign: setAssignValue,
      setTitle: setTitleValue,
    },
    {
      id: 2,
      status: 'InProgress',
      priority: 'Medium',
      title: titleValueTwo,
      assign: assignValueTwo,
      setAssign: setAssignValueTwo,
      setTitle: setTitleValueTwo,
    },
    {
      id: 3,
      status: 'InProgress',
      priority: 'high',
      title: titleValueThree,
      assign: assignValueThree,
      setAssign: setAssignValueThree,
      setTitle: setTitleValueThree,
    },
  ];

  const [doneTask, setDoneTask] = useState([]);
  const [taskList, setTasksList] = useState(items.map((item) => ({ ...item })));

  useEffect(() => {
    // Update the value property within each item of taskList
    setTasksList((prevTaskList) =>
      prevTaskList.map((item) => ({
        ...item,
        assign: item.id === 1 ? assignValue : item.id === 2 ? assignValueTwo : assignValueThree,
        title: item.id === 1 ? titleValue : item.id === 2 ? titleValueTwo : titleValueThree,
      })),
    );
  }, [assignValue, assignValueTwo, assignValueThree, titleValue, titleValueTwo, titleValueThree]);

  const isDone = (id) => {
    const draggedTask = taskList.filter((task) => task.id === id)[0];
    draggedTask.status = 'DONE';

    setTasksList((prevState) => {
      const newItems = prevState.filter((task) => task.id !== id).concat(draggedTask);
      return newItems;
    });

    // Set automatically Saved Tasks in the Table without any interaction from Users.

    //  setDoneTask((prevState) => [...prevState, draggedTask]);
  };

  const handleAddTask = () => {
    setDoneTask(() => taskList.filter((task) => task.status === 'DONE'));
  };

  const isInProgress = (id) => {
    const draggedTask = taskList.filter((task) => task.id === id)[0];
    draggedTask.status = 'InProgress';

    setTasksList((prevState) => {
      const newItems = prevState.filter((task) => task.id !== id).concat(draggedTask);

      return newItems;
    });
  };

  return (
    <CardContext.Provider value={{ isDone, isInProgress }}>
      <div className='flex flex-col gap-8'>
        <div className='flex w-full flex-col gap-8 md:flex-row'>
          <div className='w-full rounded-xl border border-dashed border-gray-g4 p-2 shadow-sm dark:border-gray-g3'>
            <h1 className='flex justify-center border-b border-gray-100 py-2  font-semibold capitalize dark:border-gray-g9/20'>
              In progress
            </h1>

            <InProgressBoxTarget>
              {/* Add Task Card Component Here  */}
              <div className='flex flex-col gap-4 p-0 sm:p-4'>
                {taskList
                  .filter((task) => task.status === 'InProgress')
                  .map(({ title, status, id, setAssign, setTitle }, idx) => (
                    <TaskCard
                      id={id}
                      key={idx}
                      title={title}
                      status={status}
                      setAssign={setAssign}
                      setTitle={setTitle}
                      idx={idx}
                    />
                  ))}
              </div>
            </InProgressBoxTarget>
          </div>

          <div className='w-full rounded-xl border border-dashed border-gray-g4 p-2 shadow-sm dark:border-gray-g3'>
            <h1 className='flex justify-center border-b py-2 font-semibold dark:border-gray-g9/20'>
              Done
            </h1>
            <DoneBoxTarget>
              {/* Add Task Card Component Here  */}
              <div className='flex flex-col gap-4 p-4'>
                {taskList
                  .filter((task) => task.status === 'DONE')
                  .map(({ title, status, id, setAssign, setTitle }, idx) => (
                    <TaskCard
                      id={id}
                      key={idx}
                      title={title}
                      status={status}
                      setAssign={setAssign}
                      setTitle={setTitle}
                      idx={idx}
                    />
                  ))}
              </div>
            </DoneBoxTarget>
          </div>
        </div>

        <Button type='submit' onClick={handleAddTask}>
          Save changes
        </Button>

        <div className='mt-8 rounded-xl border  border-gray-g9 py-8 shadow-sm dark:border-gray-g3'>
          <Table doneTask={doneTask} />
        </div>
      </div>
    </CardContext.Provider>
  );
};

export default Tasks;
