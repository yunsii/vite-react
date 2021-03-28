// @ts-nocheck
import { dynamic } from '@vitjs/runtime';
import React from 'react';
import SmileOutlined from '@ant-design/icons/SmileOutlined'
import BulbOutlined from '@ant-design/icons/BulbOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'

import LoadingComponent from '/home/zpr1g/Workspaces/github/vite-react/src/components/PageLoading';

export default function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/vite-react/src/layouts/BasicLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/welcome",
        "icon": React.createElement(SmileOutlined),
        "name": "欢迎页",
        "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/vite-react/src/pages/Welcome'), loading: LoadingComponent})
      },
      {
        "path": "/concent",
        "icon": React.createElement(BulbOutlined),
        "name": "Concent Demo",
        "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/vite-react/src/pages/Concent/HelloWorld'), loading: LoadingComponent})
      },
      {
        "path": "/account",
        "icon": React.createElement(UserOutlined),
        "name": "个人页",
        "routes": [
          {
            "path": "/account/center",
            "name": "个人中心",
            "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/vite-react/src/pages/Account/Center'), loading: LoadingComponent})
          },
          {
            "path": "/account/settings",
            "name": "个人设置",
            "component": dynamic({ loader: () => import('/home/zpr1g/Workspaces/github/vite-react/src/pages/Account/Settings'), loading: LoadingComponent})
          }
        ]
      }
    ]
  }
];
  return routes;
}
