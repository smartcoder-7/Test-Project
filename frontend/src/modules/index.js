import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Articles from './articles';

const ModuleRoutes = () => {
  return (
    <Switch>
      <Route path="/articles" component={Articles} />
      <Redirect to="/articles" />
    </Switch>
  );
};

export default ModuleRoutes;
