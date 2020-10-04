import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { history, persistor } from './configureStore';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
