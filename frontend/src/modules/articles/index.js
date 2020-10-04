import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DetailedView from './DetailedView';
import ListView from './ListView';

const ArticleRoutes = () => {
  return (
    <Switch>
      <Route exact path="/articles" component={ListView} />
      <Route exact path="/articles/:id" component={DetailedView} />
      <Redirect to="/articles" />
    </Switch>
  );
};

export default ArticleRoutes;
