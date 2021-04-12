import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Avatar from './AvatarDropdown';
import styles from './index.module.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const theme = 'dark';
  const layout = 'mix';

  let className = styles.right;

  // @ts-ignore
  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <span className={styles.action}>
        <QuestionCircleOutlined />
      </span>
      <Avatar menu />
    </Space>
  );
};

export default GlobalHeaderRight;
