import { Col, Row, Card } from 'antd';
import { MailOutlined, HomeOutlined } from '@ant-design/icons';

import ComingSoon from '@/components/ComingSoon';
import styles from './index.module.less';

export const currentUser = {
  email: 'yuns.xie@qq.com',
  address: '广东深圳',
  avatar:
    'https://avatars.githubusercontent.com/u/18096089?s=460&u=ac70c17caf8cb7e48d0a4f8b8ef28825688cbb8d&v=4',
  name: '云深',
  position: '前端开发工程师',
};

export default function AccountCenter() {
  const renderUserInfo = () => (
    <div className={styles.detail}>
      <p>
        <MailOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.email}
      </p>
      <p>
        <HomeOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.address}
      </p>
    </div>
  );

  return (
    <Row gutter={24}>
      <Col lg={7} md={24} xs={24}>
        <Card bordered={false} style={{ marginBottom: 24 }}>
          <div>
            <div className={styles.avatarHolder}>
              <img alt='' src={currentUser.avatar} />
              <div className={styles.name}>{currentUser.name}</div>
              <div>{currentUser.position}</div>
            </div>
            {renderUserInfo()}
          </div>
        </Card>
      </Col>
      <Col lg={17} md={24} xs={24}>
        <ComingSoon />
      </Col>
    </Row>
  );
}
