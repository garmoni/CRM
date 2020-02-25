import React, {useState, useEffect} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import './EmployeeTableLayout.css'
import index from "../../../../Store/Reducers";
export default function TableLayout(props) {
  const { rows, headers, onRowSelect} = props;
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleTableRowSelecton = (event, index) => {
      setSelectedIndex(index);
      onRowSelect(event, index);
    };

  return (
    <TableContainer component={Paper}>
      <Table size="medium" stickyHeader align="left" className="tableEmployees">
        <TableHead>
          <TableRow>
            {headers.map((headerCell, i) => (
              <TableCell align="left" key={i}>
                {headerCell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}  selected={selectedIndex===i} onClick={event=>handleTableRowSelecton(event,i)}>
              {row.map((cell, i) => (
                <TableCell align="left" key={i} >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
