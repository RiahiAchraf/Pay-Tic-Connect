'use client';

import React, { createContext, useState } from 'react';

import { data } from '@/utils/data';

import DoneBoxTarget from './DoneBoxTarget';
import InProgressBoxTarget from './InProgressBoxTarget';
import TableContent from './TableContent';
import TaskCard from './TaskCard';

export const CardContext = createContext({
  isDone: () => {},
  isInProgress: () => {},
});

const Tasks = () => {
  const [taskList, setTasksList] = useState(data);
  const [doneTask, setDoneTask] = useState([]);

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
            {/* {statuses.map(({ status }, idx) => (
              <Text
                key={idx}
                fontWeight="semibold"
                fontSize="2xl"
                textAlign="center"
              >
                {status}
              </Text>
            ))} */}
            <h1 className='flex justify-center border-b border-gray-100 py-2 font-semibold capitalize text-gray-700'>
              In progress
            </h1>

            <InProgressBoxTarget>
              {/* Add Task Card Component Here  */}
              <div className='flex flex-col gap-4 p-4'>
                {taskList
                  .filter((task) => task.status === 'InProgress')
                  .map(({ icon, title, status, content, id }, idx) => (
                    <TaskCard
                      id={id}
                      key={idx}
                      icon={icon}
                      title={title}
                      status={status}
                      content={content}
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
                  .map(({ icon, title, status, content, id }, idx) => (
                    <TaskCard
                      id={id}
                      key={idx}
                      icon={icon}
                      title={title}
                      status={status}
                      content={content}
                    />
                  ))}
              </div>
            </DoneBoxTarget>
          </div>
        </div>

        <button
          className='rounded-md bg-gray-900 py-4 capitalize text-white shadow-md hover:bg-gray-700'
          onClick={handleAddTask}
        >
          Save changes
        </button>

        <div className='mt-8 h-[40vh] rounded-md border py-8 shadow-md'>
          <TableContent doneTask={doneTask} />
        </div>
      </div>
    </CardContext.Provider>
  );
};

export default Tasks;
