export default [
  {
    path: '/',
    component: './layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: './layouts/UserLayout',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './pages/User/Login',
          },
        ],
      },
      {
        path: '/',
        component: './layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: './layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                icon: 'smile',
                name: '欢迎页',
                component: './pages/Welcome',
              },
              {
                path: '/concent',
                icon: 'bulb',
                name: 'Concent Demo',
                routes: [
                  {
                    path: '/concent/hello-world',
                    name: 'Hello World',
                    component: './pages/Concent/HelloWorld',
                  },
                ],
              },
              {
                path: '/account',
                icon: 'user',
                name: '个人页',
                routes: [
                  {
                    path: '/account/center',
                    name: '个人中心',
                    component: './pages/Account/Center',
                  },
                  {
                    path: '/account/settings',
                    name: '个人设置',
                    component: './pages/Account/Settings',
                  },
                ],
              },
            ],
          },
          {
            component: './pages/404',
          },
        ],
      },
      {
        component: './pages/404',
      },
    ],
  },
  {
    component: './pages/404',
  },
];
