import type { ModuleConfig } from 'concent';

import { queryMe } from '@/services/me';

export interface Me {
  address?: string;
  avatar?: string;
  email?: string;
  name?: string;
  position?: string;
}

const Model: ModuleConfig = {
  state: {
    address: '',
    avatar: '',
    email: '',
    name: '',
    position: '',
  } as Me,

  reducer: {
    fetchMe: async (payload, moduleState, actionCtx) => {
      const response = await queryMe();
      actionCtx.dispatch('saveMe', response.data);
    },

    saveMe(payload) {
      return {
        address: payload.address,
        avatar: payload.avatar,
        email: payload.email,
        name: payload.name,
        position: payload.position,
      };
    },
  },
};

export default Model;
