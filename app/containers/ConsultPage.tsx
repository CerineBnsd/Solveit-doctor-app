import React from 'react';
import { Typography, Container } from '@material-ui/core';
import AddConsult from '../components/AddConsult';

export default function PatientsPage() {
  return (
    <Container>
      <Typography variant="h4">Ajouter une consultation </Typography>
      <Typography variant="subtitle1">
        Remplissez ces champs et sauvgarder la consultation
      </Typography>
      <AddConsult />
    </Container>
  );
}
