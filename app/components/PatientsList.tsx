import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  nom: string,
  nss: number,
  telephone: string,
  email: string,
  action: string
) {
  return { nom, nss, telephone, email, action };
}

const rows = [
  createData(
    'Cérine Bensadi',
    10001,
    '0555555555',
    'hc_bensadi@esi.dz',
    'Ajouter consultation'
  ),
  createData(
    'Cérine Bensadi',
    10002,
    '0555555555',
    'hc_bensadi@esi.dz',
    'Ajouter consultation'
  ),
  createData(
    'Cérine Bensadi',
    10003,
    '0555555555',
    'hc_bensadi@esi.dz',
    'Ajouter consultation'
  ),
  createData(
    'Cérine Bensadi',
    10004,
    '0555555555',
    'hc_bensadi@esi.dz',
    'Ajouter consultation'
  ),
  createData(
    'Cérine Bensadi',
    10005,
    '0555555555',
    'hc_bensadi@esi.dz',
    'Ajouter consultation'
  ),
];

export default function PatientsList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ marginTop: '18px' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Nss</TableCell>
            <TableCell align="right">Téléphone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nss} hover>
              <TableCell component="th" scope="row">
                {row.nom}
              </TableCell>
              <TableCell align="right">{row.nss}</TableCell>
              <TableCell align="right">{row.telephone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
