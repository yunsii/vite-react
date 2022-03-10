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
            name: 'Log in',
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
                name: 'Welcome page',
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
                name: 'Personal page',
                routes: [
                  {
                    path: '/account/center',
                    name: 'Personal center',
                    component: './pages/Account/Center',
                  },
                  {
                    path: '/account/settings',
                    name: 'Personal settings',
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
