import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './redux/configureStore';



import App from './components/App';


let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.querySelector('#root'));
