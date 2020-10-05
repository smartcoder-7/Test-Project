import React from 'react';

import Routes from './modules';
import Notifier from './components/Notifier';
import MainLayout from './containers/layout/MainLayout';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes />
      <Notifier />
    </MainLayout>
  );
};

export default AppRoutes;
