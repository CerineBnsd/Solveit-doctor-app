import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Dpmi from '../components/Dpmi';

export default function PatientsPage() {
  return (
    <Container>
      <Typography variant="h4">DPMI </Typography>
      <Typography variant="subtitle1">Dossier médical informatisé</Typography>
      <Dpmi />
    </Container>
  );
}
