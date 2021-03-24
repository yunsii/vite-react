import React from 'react';
import type { ComponentType } from 'react';
import { SmileOutlined, UserOutlined, BulbOutlined } from '@ant-design/icons';
import Loadable from 'react-loadable';

import type { IRoute } from '@/core/renderRoutes';
import PageLoading from '@/components/PageLoading';

function getLoadableComponent<Props>(loader: () => Promise<{ default: ComponentType<Props> }>) {
  return Loadable({
    loader: () => {
      return new Promise<any>((resolve) => {
        loader().then((module) => {
          // ref: https://stackoverflow.com/a/34130767/8335317
          // 返回 module 页面报错，无法正常渲染
          resolve(module.default);
        });
      });
    },
    loading: () => <PageLoading />,
  });
}

const routes: IRoute[] = [
  {
    path: '/',
    component: getLoadableComponent(() => import('./layouts/BasicLayout')),
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
        // component: Welcome,
        component: getLoadableComponent(() => import('./pages/Welcome')),
      },
      {
        path: '/concent',
        icon: <BulbOutlined />,
        name: 'Concent Demo',
        component: getLoadableComponent(() => import('./pages/Concent/HelloWorld')),
      },
      {
        path: '/account',
        icon: <UserOutlined />,
        name: '个人页',
        routes: [
          {
            path: '/account/center',
            name: '个人中心',
            component: getLoadableComponent(() => import('./pages/Account/Center')),
          },
          {
            path: '/account/settings',
            name: '个人设置',
            component: getLoadableComponent(() => import('./pages/Account/Settings')),
          },
        ],
      },
    ],
  },
];

export default routes;
