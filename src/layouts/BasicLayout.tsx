/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import type { BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import { HomeOutlined } from '@ant-design/icons';
import { history, Link, useLocation } from '@vitjs/runtime';

import RightContent from '@/containers/GlobalHeader/RightContent';
import GlobalFooter from '@/containers/GlobalFooter';
import defaultSettings from '../../config/defaultSettings';

const loginPath = '/user/login';

export type BasicLayoutProps = {
  route: ProLayoutProps['route'];
} & ProLayoutProps;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const location = useLocation();

  return (
    <ProLayout
      logo='https://github.com/vitjs/vit/raw/master/icons/logo.svg'
      {...props}
      onPageChange={() => {
        // 如果没有登录，重定向到 login
        if (localStorage.getItem('status') !== 'ok' && history.location.pathname !== loginPath) {
          history.push(loginPath);
        }
      }}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      rightContentRender={() => <RightContent />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: (<HomeOutlined />) as any,
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => <GlobalFooter />}
      // waterMarkProps={{
      //   content: 'Vite React',
      //   fontColor: 'rgba(24,144,255,0.15)',
      // }}
      {...defaultSettings}
    />
  );
};

export default BasicLayout;
