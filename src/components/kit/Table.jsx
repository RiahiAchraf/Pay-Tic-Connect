import React, { useId } from 'react';

import Button from '@/components/kit/Button';

export default function Table({ doneTask }) {
  const ID = useId();
  const columnNames = ['ID', 'Title', 'Assigne', 'Priority'];

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>Daily Tasks</h1>
          <p className='mt-2 text-sm text-gray-700'>
            Tasks include work-related assignments, personal to-do items.
          </p>
        </div>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <Button className='bg-red-900 px-8 enabled:hover:bg-violet-900/80' onClick={() => {}}>
            Clear
          </Button>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300 border-b border-gray-200'>
              <thead>
                <tr>
                  {columnNames.map((columnName, index) => (
                    <th
                      key={`${index}-${ID}`}
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold capitalize text-gray-900'
                    >
                      {columnName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 border-b'>
                {doneTask.map((task) => (
                  <tr key={`${task.id}-${ID}`}>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
                      {task.id}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {task.title}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {task.value}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{task.id}</td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                      <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                        Edit<span className='sr-only'>, {task.id}</span>
                      </a>
                    </td>
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
