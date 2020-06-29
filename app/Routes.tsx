/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import PatientsPage from './containers/PatientsPage';
import ConsultPage from './containers/ConsultPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.CONSULT} component={ConsultPage} />
        <Route path={routes.PATIENTS} component={PatientsPage} />
      </Switch>
    </App>
  );
}
