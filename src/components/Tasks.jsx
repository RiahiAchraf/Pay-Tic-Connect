'use client';

import React, { createContext, useEffect, useState } from 'react';

import DoneBoxTarget from './DoneBoxTarget';
import InProgressBoxTarget from './InProgressBoxTarget';
import TableContent from './TableContent';
import TaskCard from './TaskCard';

export const CardContext = createContext({
  isDone: () => {},
  isInProgress: () => {},
});

const Tasks = () => {
  const [selectValue, setSelectValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [checked, setChecked] = useState('');

  const items = [
    {
      id: 1,
      status: 'InProgress',
      title: 'Feature 1',
      selectValue,
      textValue,
      checkbox: !!checked ? 'Confirmed' : 'Not Confirmed',
      setSelectValue,
      setTextValue,
      setChecked,
    },
  ];

  const [doneTask, setDoneTask] = useState([]);
  const [taskList, setTasksList] = useState(
    items.map((item) => ({ ...item, selectValue, textValue, checked })),
  );

  useEffect(() => {
    // Update the value property within each item of taskList
    setTasksList((prevTaskList) =>
      prevTaskList.map((item) => ({ ...item, selectValue, textValue, checked })),
    );
  }, [selectValue, textValue, checked]);

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
                  .map(
                    (
                      { title, status, id, setSelectValue, setTextValue, setChecked, inputType },
                      idx,
                    ) => (
                      <TaskCard
                        id={id}
                        key={idx}
                        title={title}
                        status={status}
                        setSelectValue={setSelectValue}
                        setTextValue={setTextValue}
                        setChecked={setChecked}
                        inputType={inputType}
                        idx={idx}
                      />
                    ),
                  )}
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
                  .map(
                    (
                      { title, status, id, setSelectValue, setTextValue, setChecked, inputType },
                      idx,
                    ) => (
                      <TaskCard
                        id={id}
                        key={idx}
                        title={title}
                        status={status}
                        setTextValue={setTextValue}
                        setSelectValue={setSelectValue}
                        setChecked={setChecked}
                        inputType={inputType}
                        idx={idx}
                      />
                    ),
                  )}
              </div>
            </DoneBoxTarget>
          </div>
        </div>

        <button
          type='submit'
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
