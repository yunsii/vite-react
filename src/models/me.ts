import { defineModule } from 'concent';

import { queryMe } from '@/services/me';

export interface Me {
  address?: string;
  avatar?: string;
  email?: string;
  name?: string;
  position?: string;
}

const Model = defineModule({
  state: { address: '', avatar: '', email: '', name: '', position: '' } as Me,

  reducer: {
    fetchMe: async () => {
      const response = await queryMe();
      return response.data;
    },
  },
});

export default Model;
