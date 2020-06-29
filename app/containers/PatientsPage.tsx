import React from 'react';
import { Typography, Container } from '@material-ui/core';
import PatientsList from '../components/PatientsList';

export default function PatientsPage() {
  return (
    <Container>
      <Typography variant="h4">Liste de patients </Typography>
      <Typography variant="subtitle1">14 patients sont affichés</Typography>
      <PatientsList />
    </Container>
  );
}
