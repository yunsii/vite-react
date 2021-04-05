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
            name: 'login',
            path: '/user/login',
            component: './pages/User/Login',
            exact: true,
          },
        ],
      },
      {
        path: '/',
        component: './layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/welcome',
            exact: true,
          },
          {
            path: '/welcome',
            icon: 'smile',
            name: '欢迎页',
            component: './pages/Welcome',
            exact: true,
          },
          {
            path: '/concent',
            icon: 'bulb',
            name: 'Concent Demo',
            component: './pages/Concent/HelloWorld',
            exact: true,
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
                exact: true,
              },
              {
                path: '/account/settings',
                name: '个人设置',
                component: './pages/Account/Settings',
                exact: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
