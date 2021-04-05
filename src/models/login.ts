import { message } from 'antd';
import type { ModuleConfig } from 'concent';
import { history } from '@vitjs/vit';
import { stringify } from 'querystring';

import { fakeAccountLogin } from '@/services/login';
import { getPageQuery } from '@/utils/utils';

const Model: ModuleConfig = {
  state: {
    status: undefined,
  },

  reducer: {
    login: async (payload, moduleState, actionCtx) => {
      const response = await fakeAccountLogin(payload);
      actionCtx.dispatch('changeLoginStatus', response);
      // Login successfully
      if (response.status === 'ok') {
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        message.success('🎉 🎉 🎉  登录成功！');
        let { redirect } = params as { redirect: string };
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (window.routerBase !== '/') {
              redirect = redirect.replace(window.routerBase, '/');
            }
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        history.replace(redirect || '/');
      }
    },

    logout() {
      const { redirect } = getPageQuery();
      // Note: There may be security issues, please note
      if (window.location.pathname !== '/user/login' && !redirect) {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },

    changeLoginStatus(payload) {
      // setAuthority(payload.currentAuthority);
      return {
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default Model;
