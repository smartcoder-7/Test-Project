import React from 'react';

import Routes from './modules';
import Notifier from './components/Notifier';

const AppRoutes = () => {
  return (
    <>
      <Routes />
      <Notifier />
    </>
  );
};

export default AppRoutes;
