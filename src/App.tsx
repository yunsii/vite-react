import React from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';

import BasicLayout from '@/layouts/BasicLayout';
import Welcome from '@/pages/Welcome';
import AccountCenter from '@/pages/Account/Center';
import AccountSettings from '@/pages/Account/Settings';

export default function App() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <Switch>
        <Route path='/'>
          <BasicLayout
            history={history}
            location={location}
            route={{
              path: '/',
              routes: [
                {
                  path: '/welcome',
                  icon: <SmileOutlined />,
                  name: '欢迎页',
                },
                {
                  path: '/account',
                  icon: <UserOutlined />,
                  name: '个人页',
                  routes: [
                    {
                      path: '/account/center',
                      name: '个人中心',
                    },
                    {
                      path: '/account/settings',
                      name: '个人设置',
                    },
                  ],
                },
              ],
            }}
          >
            <Switch>
              <Route path='/welcome'>
                <Welcome />
              </Route>
              <Route path='/account'>
                <Switch>
                  <Route path='/account/center'>
                    <AccountCenter />
                  </Route>
                  <Route path='/account/settings'>
                    <AccountSettings />
                  </Route>
                </Switch>
              </Route>
              <Redirect to='/welcome' />
            </Switch>
          </BasicLayout>
        </Route>
      </Switch>
    </div>
  );
}
