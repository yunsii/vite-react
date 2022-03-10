import type { MockMethod } from '@vitjs/vit';

export default [
  {
    url: '/api/me',
    method: 'get',
    timeout: 240,
    response: () => {
      return {
        code: 0,
        data: {
          address: 'Shenzhen, Guangdong',
          avatar:
            'https://avatars.githubusercontent.com/u/18096089?s=460&u=ac70c17caf8cb7e48d0a4f8b8ef28825688cbb8d&v=4',
          email: 'yuns.xie@qq.com',
          name: 'Deep',
          position: 'Front-end development engineer',
        },
      };
    },
  },
] as MockMethod[];
