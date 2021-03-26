import './runConcent';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import renderRoutes from '@/core/renderRoutes';
import routes from '@/routes';
import config from '../config/config';
import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={config.base}>{renderRoutes({ routes })}</HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
