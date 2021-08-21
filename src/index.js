import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components 
import App from './App';
import ConsumirApi from './Components/ConsumoApi.js';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
