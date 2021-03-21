import React from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';

import type { IRoute } from '@/core/renderRoutes';
import BasicLayout from '@/layouts/BasicLayout';
import Welcome from '@/pages/Welcome';
import AccountCenter from '@/pages/Account/Center';
import AccountSettings from '@/pages/Account/Settings';

const routes: IRoute[] = [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/',
        redirect: '/welcome',
        exact: true,
      },
      {
        path: '/welcome',
        icon: <SmileOutlined />,
        name: '欢迎页',
        component: Welcome,
      },
      {
        path: '/account',
        icon: <UserOutlined />,
        name: '个人页',
        routes: [
          {
            path: '/account/center',
            name: '个人中心',
            component: AccountCenter,
          },
          {
            path: '/account/settings',
            name: '个人设置',
            component: AccountSettings,
          },
        ],
      },
    ],
  },
];

export default routes;
