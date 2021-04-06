import type { MockMethod } from '@vitjs/vit/plugin';

export default [
  {
    url: '/api/login/account',
    method: 'post',
    timeout: 240,
    response: ({ body }) => {
      const { password, userName, type } = body;
      if (password === 'ant.design' && userName === 'admin') {
        return {
          status: 'ok',
          type,
          currentAuthority: 'admin',
        };
      }
      if (password === 'ant.design' && userName === 'user') {
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