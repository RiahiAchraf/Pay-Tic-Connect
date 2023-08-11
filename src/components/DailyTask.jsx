import { useState } from 'react';

import { Input } from './kit';

const DailyTask = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const items = [
    {
      id: 1,
      status: 'InProgress',
      title: 'Sprint Retrospective',
      component: (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label='What went well?'
          placeholder='Comment'
        />
      ),
    },
    {
      id: 2,
      status: 'InProgress',
      title: 'Sprint planing',
      component: (
        <Input
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          label='What went well?'
          placeholder='Comment'
        />
      ),
    },
    {
      id: 3,
      status: 'InProgress',
      title: 'Backlog',
      component: (
        <Input
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          label='What went well?'
          placeholder='Comment'
        />
      ),
    },
  ];

  return items;
};

export default DailyTask;
