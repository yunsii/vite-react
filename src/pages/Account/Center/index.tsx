import { Col, Row, Card } from 'antd';
import { MailOutlined, HomeOutlined } from '@ant-design/icons';
import { useConcent } from 'concent';

import ComingSoon from '@/components/ComingSoon';
import styles from './index.module.less';

export default function AccountCenter() {
  const { state: me } = useConcent('me');

  const renderUserInfo = () => (
    <div className={styles.detail}>
      <p>
        <MailOutlined
          style={{
            marginRight: 8,
          }}
        />
        {me.email}
      </p>
      <p>
        <HomeOutlined
          style={{
            marginRight: 8,
          }}
        />
        {me.address}
      </p>
    </div>
  );

  return (
    <Row gutter={24}>
      <Col lg={7} md={24} xs={24}>
        <Card bordered={false} style={{ marginBottom: 24 }}>
          <div>
            <div className={styles.avatarHolder}>
              <img alt='' src={me.avatar} />
              <div className={styles.name}>{me.name}</div>
              <div>{me.position}</div>
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
