// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;