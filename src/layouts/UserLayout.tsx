import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Link } from '@vitjs/runtime';

import GlobalFooter from '@/containers/GlobalFooter';

import styles from './UserLayout.module.less';

import type { History } from '@vitjs/runtime';

export type UserLayoutProps = {
  history: History;
  location: any;
  match?: any;
  route: any;
};

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
    children,
    location = {
      pathname: '',
    },
  } = props;

  const { routes = [] } = route;
  const { breadcrumb } = getMenuData(routes);
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
        <div className='flex-auto pt-32px'>
          <div className='text-center'>
            <div className='h-44px leading-44px'>
              <Link to='/'>
                <img
                  src='https://github.com/vitjs/vit/raw/master/icons/logo.svg'
                  className='inline h-44px mr-16px align-top'
                  alt='logo'
                />
                <span className={styles.title}>Vite React</span>
              </Link>
            </div>
            <div className={styles.desc}>🚀 Use Vite + React like a Pro!</div>
          </div>
          {children}
        </div>
        <GlobalFooter />
      </div>
    </HelmetProvider>
  );
};

export default UserLayout;
