import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { STORE } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);