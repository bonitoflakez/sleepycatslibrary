import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';
import reportWebVitals from './reportWebVitals';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
