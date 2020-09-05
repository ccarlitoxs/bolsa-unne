import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, fecha, especie, operacion, precio,cantidad, monto) {
  return { id, fecha, especie, operacion, precio,cantidad, monto };
}

const rows = [
  createData(0, '16 Mar, 2019', 'GGAL', 'COMPRA', 312.4,10, 312.44),
  createData(1, '16 Mar, 2019', 'YPF', 'VENTA', 312.4,10, 866.99),
  createData(2, '16 Mar, 2019', 'DOLAR MEP', 'VENTA', 312.4,10, 100.81),
  createData(3, '16 Mar, 2019', 'ALUA', 'COMPRA', 312.4,10, 654.39),
  createData(4, '15 Mar, 2019', 'MERV', 'COMPRA', 312.4,10, 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Últimas órdenes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Especie</TableCell>
            <TableCell>Operación</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell align="right">Monto Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.especie}</TableCell>
              <TableCell>{row.operacion}</TableCell>
              <TableCell>{row.precio}</TableCell>
              <TableCell>{row.cantidad}</TableCell>
              <TableCell align="right">{row.monto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver historial de operaciones
        </Link>
      </div>
    </React.Fragment>
  );
}