/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { useStore } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: 'transparent',
      color: '#09CFA3',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#737689',
      textAlign: 'center',
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#E5E9EF',
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

interface Customer {
  id: number;
  name: string;
  document: string;
  birthdate: string;
  customer_since: string;
  last_purchase: string;
}

interface TableProps {
  isHidden: boolean;
}

export default function CustomizedTables({ isHidden }: TableProps) {
  const classes = useStyles();
  const rows: Array<Customer> = useStore().getState().customers;

  return (
    <TableContainer
      style={{
        maxWidth: '80%',
        position: 'relative',
        top: '105px',
        left: '255px',
        marginBottom: '50px',
        // visibility: isHidden ? 'hidden' : 'visible',
        display: isHidden ? 'none' : 'block',
      }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">NOME</StyledTableCell>
            <StyledTableCell align="right">DOCUMENTO</StyledTableCell>
            <StyledTableCell align="right">DATA NASCIMENTO</StyledTableCell>
            <StyledTableCell align="right">CLIENTE DESDE</StyledTableCell>
            <StyledTableCell align="right">ÚLTIMA COMPRA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.document}</StyledTableCell>
              <StyledTableCell align="right">{row.birthdate}</StyledTableCell>
              <StyledTableCell align="right">
                {row.customer_since}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.last_purchase}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
