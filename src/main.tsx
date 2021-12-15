import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import App from './App';
import DarkModeProvider from './lib/DarkModeContext';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
