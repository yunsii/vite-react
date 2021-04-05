/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import React, { useRef } from 'react';
import type { MenuDataItem, BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useHistory, useLocation } from '@vitjs/vit';

import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';

export type BasicLayoutProps = {
  route: ProLayoutProps['route'];
} & ProLayoutProps;

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} theprimone 出品`}
    links={[
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/theprimone/vite-react',
        blankTarget: true,
      },
    ]}
  />
);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const menuDataRef = useRef<MenuDataItem[]>([]);
  const history = useHistory();
  const location = useLocation();

  console.log('location', location);
  console.log('props.location', props.location);
  console.log('props.route', props.route);

  return (
    <ProLayout
      logo={logo}
      title='Vite React'
      {...props}
      location={location}
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
      footerRender={() => defaultFooterDom}
      postMenuData={(menuData) => {
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
      // waterMarkProps={{
      //   content: 'Ant Design Pro',
      //   fontColor: 'rgba(24,144,255,0.15)',
      // }}
      fixSiderbar
    />
  );
};

export default BasicLayout;
