'use client';

import React, { createContext, useEffect, useState } from 'react';

import DoneBoxTarget from './DoneBoxTarget';
import InProgressBoxTarget from './InProgressBoxTarget';
import { Table } from './kit';
import Button from './kit/Button';
import TaskCard from './TaskCard';

export const CardContext = createContext({
  isDone: () => {},
  isInProgress: () => {},
});

const Tasks = () => {
  const [selectValue, setSelectValue] = useState('');
  const [selectValueTwo, setSelectValueTwo] = useState('');
  const [selectValueThree, setSelectValueThree] = useState('');

  const items = [
    {
      id: 1,
      status: 'InProgress',
      title: 'Feature 1',
      value: selectValue,
      item: setSelectValue,
    },
    {
      id: 2,
      status: 'InProgress',
      title: 'Feature 2',
      value: selectValueTwo,
      item: setSelectValueTwo,
    },
    {
      id: 3,
      status: 'InProgress',
      title: 'Feature 3',
      value: selectValueThree,
      item: setSelectValueThree,
    },
  ];

  const [doneTask, setDoneTask] = useState([]);
  const [taskList, setTasksList] = useState(items.map((item) => ({ ...item })));

  useEffect(() => {
    // Update the value property within each item of taskList
    setTasksList((prevTaskList) =>
      prevTaskList.map((item) => ({
        ...item,
        value: item.id === 1 ? selectValue : item.id === 2 ? selectValueTwo : selectValueThree,
      })),
    );
  }, [selectValue, selectValueTwo, selectValueThree]);

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
          <div className='w-full rounded-xl border p-2 shadow-sm'>
            <h1 className='flex justify-center border-b border-gray-100 py-2 font-semibold capitalize text-gray-700'>
              In progress
            </h1>

            <InProgressBoxTarget>
              {/* Add Task Card Component Here  */}
              <div className='flex flex-col gap-4 p-4'>
                {taskList
                  .filter((task) => task.status === 'InProgress')
                  .map(({ title, status, id, content, item }, idx) => (
                    <TaskCard
                      id={id}
                      key={idx}
                      title={title}
                      status={status}
                      content={content}
                      item={item}
                      idx={idx}
                    />
                  ))}
              </div>
            </InProgressBoxTarget>
          </div>

          <div className='w-full rounded-xl border p-2 shadow-sm'>
            <h1 className='flex justify-center border-b border-gray-100 py-2 font-semibold text-gray-700'>
              Done
            </h1>

            <DoneBoxTarget>
              {/* Add Task Card Component Here  */}
              <div className='flex flex-col gap-4 p-4'>
                {taskList
                  .filter((task) => task.status === 'DONE')
                  .map(({ title, status, id, content, item }, idx) => (
                    <TaskCard
                      id={id}
                      key={idx}
                      title={title}
                      status={status}
                      content={content}
                      item={item}
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

        <div className='mt-8 rounded-xl border py-8 shadow-sm'>
          <Table doneTask={doneTask} />
        </div>
      </div>
    </CardContext.Provider>
  );
};

export default Tasks;
