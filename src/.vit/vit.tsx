// @ts-nocheck
import '../concent.ts';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { renderRoutes } from '@vitjs/runtime';
import getRoutes from './routes';
import '../global.less';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
      basename='/vite-react/'
    >
      {renderRoutes({ routes: getRoutes() })}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
