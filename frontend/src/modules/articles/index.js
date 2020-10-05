import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import DetailedView from './DetailedView';
import ListView from './ListView';

const ArticleRoutes = () => {
  const { url } = useRouteMatch();

  console.log('url', url);
  return (
    <Switch>
      <Route exact path={`${url}/:id`} component={DetailedView} />
      <Route exact path={`${url}`} component={ListView} />
      {/* <Redirect to={`${url}`} /> */}
    </Switch>
  );
};

export default ArticleRoutes;
