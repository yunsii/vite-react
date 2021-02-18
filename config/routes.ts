export default [
  {
    path: '/',
    component: './layouts/RootLayout',
    routes: [
      {
        path: '/',
        routes: [
          {
            path: '/',
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: '欢迎页',
                component: './pages/Welcome',
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
