import type { MockMethod } from '@vitjs/vite-plugin';

export default [
  {
    url: '/api/login/account',
    method: 'post',
    timeout: 240,
    response: ({ body }) => {
      const { password, userName, type } = body;
      if (password === 'vite-react' && userName === 'admin') {
        return {
          status: 'ok',
          type,
          currentAuthority: 'admin',
        };
      }
      if (password === 'vite-react' && userName === 'user') {
        return {
          status: 'ok',
          type,
          currentAuthority: 'user',
        };
      }
      if (type === 'mobile') {
        return {
          status: 'ok',
          type,
          currentAuthority: 'admin',
        };
      }
      return {
        status: 'error',
        type,
        currentAuthority: 'guest',
      };
    },
  },
  {
    url: '/api/login/captcha',
    method: 'get',
    timeout: 240,
    response: () => {
      return {
        code: 0,
        data: 'captcha-xxx',
      };
    },
  },
] as MockMethod[];
