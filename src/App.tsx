import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import { Router } from './pages/Router';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;