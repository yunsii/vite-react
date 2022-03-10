import { Card, Alert, Typography } from 'antd';
import classNames from 'classnames';
import { PageContainer } from '@ant-design/pro-layout';

import styles from './index.module.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={classNames(styles.pre, 'my-12px px-20px py-12px')}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default function Welcome() {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'Faster and stronger heavy components have been released.'}
          type='success'
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          Advanced form
          <a
            href='https://procomponents.ant.design/components/table'
            rel='noopener noreferrer'
            target='__blank'
          >
            welcome
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          Advanced layout
          <a
            href='https://procomponents.ant.design/components/layout'
            rel='noopener noreferrer'
            target='__blank'
          >
            welcome
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
    </PageContainer>
  );
}
