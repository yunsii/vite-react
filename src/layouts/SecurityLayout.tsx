import { stringify } from 'querystring';

import { useEffect } from 'react';
import { useConcent } from 'concent';
import { Redirect, useLocation } from '@vitjs/runtime';

import PageLoading from '@/components/PageLoading';

const SecurityLayout: React.FC = ({ children }) => {
  const {
    state: me,
    connectedState,
    dispatch,
  } = useConcent({
    module: 'me',
    connect: { loading: ['me/fetchMe'] },
  });
  const fetchMeLoading = connectedState.loading['me/fetchMe'];
  const location = useLocation();

  // You can replace it to your authentication rule (such as check token exists)
  // You can replace it into your own login authentication rules (such as determining if the token is existing)
  const isLogin = me && !!me.email;
  const queryString = stringify({
    redirect: window.location.href,
  });

  useEffect(() => {
    dispatch('fetchMe');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLogin || fetchMeLoading) {
    return <PageLoading />;
  }

  if (!isLogin && location.pathname !== '/user/login') {
    return <Redirect to={`/user/login?${queryString}`} />;
  }

  return <>{children}</>;
};

export default SecurityLayout;
