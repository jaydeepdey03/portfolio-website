/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Countcontext from './context/Countcontext';

ReactDOM.render(
  <React.StrictMode>
    <Countcontext>
      <App />
    </Countcontext>
  </React.StrictMode>,
  document.getElementById('root'),
);
