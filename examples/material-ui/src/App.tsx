import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Grid,
} from '@material-ui/core';
import { useTable } from 'react-final-table';

const columns = [
  {
    name: 'first_name',
    label: 'First Name',
    render: ({ value }: { value: string }) => (
      <>
        <span role="img" aria-label="mage">
          🧙
        </span>
        {value}
      </>
    ),
  },
  {
    name: 'last_name',
    label: 'Last Name',
  },
];

const data = [
  {
    first_name: 'Frodo',
    last_name: 'Baggins',
  },
  {
    first_name: 'Samwise',
    last_name: 'Gamgee',
  },
];

function App() {
  const { headers, rows, selectRow, selectedRows, toggleAll } = useTable(
    columns,
    data,
    {
      selectable: true,
    }
  );

  return (
    <Grid container>
      <Grid item>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length !== rows.length
                    }
                    checked={selectedRows.length === rows.length}
                    onClick={() => toggleAll()}
                  />
                </TableCell>
                {headers.map(column => (
                  <TableCell>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={row.selected}
                      onChange={() => selectRow(row.id)}
                    />
                  </TableCell>
                  {row.cells.map(cell => (
                    <TableCell>{cell.render()}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <pre>
          <code>{JSON.stringify({ selectedRows, rows }, null, 2)}</code>
        </pre>
      </Grid>
    </Grid>
  );
}

export default App;
