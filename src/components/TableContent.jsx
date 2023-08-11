import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const TableContent = ({ doneTask }) => {
  // Using useMemo Hooks to avoid!
  // re-rendering the table every time.

  // The useMemo hook is used for memoization in React. It allows you to memoize the result of a computation and only recompute it when its dependencies change. By using useMemo, you can optimize the performance of your application by avoiding unnecessary computations.

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'textValue',
      },
      {
        Header: 'Assigned',
        accessor: 'selectValue',
      },
      {
        Header: 'Confirm',
        accessor: 'checked',
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: doneTask,
  });

  return (
    <Table variant='striped' {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th key={column.id} {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td key={cell.id} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default TableContent;
