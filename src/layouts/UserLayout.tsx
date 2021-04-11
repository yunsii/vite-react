import type { MenuDataItem } from '@ant-design/pro-layout';
import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { Link } from '@vitjs/vit';

import GlobalFooter from '@/components/GlobalFooter';
import styles from './UserLayout.module.less';

export type UserLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  match?: any;
  location: any;
  history: any;
  route: any;
};

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  console.log('props', props);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    title: 'Vite React',
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to='/'>
                <img alt='logo' className={styles.logo} src={`${window.routerBase}logo.svg`} />
                <span className={styles.title}>Vite React</span>
              </Link>
            </div>
            <div className={styles.desc}>✨ Use Vite + React like a Pro!</div>
          </div>
          {children}
        </div>
        <GlobalFooter />
      </div>
    </HelmetProvider>
  );
};

export default UserLayout;
