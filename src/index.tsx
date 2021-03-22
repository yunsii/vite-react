import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import renderRoutes from '@/core/renderRoutes';
import routes from '@/routes';
import config from '../config/config';
import './runConcent';
import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={config.base}>{renderRoutes({ routes })}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
