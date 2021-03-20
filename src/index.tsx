import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/vite-react'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
