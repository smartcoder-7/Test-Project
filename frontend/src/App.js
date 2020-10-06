import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';

import store, { history, persistor } from './configureStore';
import Routes from './routes';
import 'services/MQService';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Routes />
            </SnackbarProvider>
          </StylesProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
