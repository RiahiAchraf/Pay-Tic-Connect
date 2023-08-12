import React, { useId } from 'react';

export default function Table({ doneTask }) {
  const ID = useId();
  const columnNames = ['ID', 'Title', 'Assigne', 'Priority'];

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 '>Daily Tasks</h1>
          <p className='mt-2 text-sm '>
            Tasks include work-related assignments, personal to-do items.
          </p>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-200 border-b border-gray-200 dark:divide-gray-g9/20 dark:border-gray-g9/20'>
              <thead>
                <tr>
                  {columnNames.map((columnName, index) => (
                    <th
                      key={`${index}-${ID}`}
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold capitalize '
                    >
                      {columnName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 border-b'>
                {doneTask.map((task) => (
                  <tr key={`${task.id}-${ID}`}>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  '>
                      {task.id}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm '>{task.title}</td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm '>{task.assign}</td>
                    <td className='whitespace-nowrap px-3 py-4 pl-4 '>{task.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
