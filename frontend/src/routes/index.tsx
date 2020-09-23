import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Faturamento from '../pages/Faturamento';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Faturamento} />
  </Switch>
);

export default Routes;
