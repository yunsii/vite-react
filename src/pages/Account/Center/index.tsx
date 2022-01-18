import { Col, Row, Card } from 'antd';
import { MailOutlined, HomeOutlined } from '@ant-design/icons';
import { useConcent } from 'concent';

import ComingSoon from '@/components/ComingSoon';

export default function AccountCenter() {
  const { state: me } = useConcent('me');

  const renderUserInfo = () => (
    <div>
      <p className='pl-26px' mb='8px'>
        <MailOutlined
          style={{
            marginRight: 8,
          }}
        />
        {me.email}
      </p>
      <p className='pl-26px'>
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
            <div className='mb-24px text-center'>
              <img src={me.avatar} className='inline w-104px h-104px mb-20px rounded-full' />
              <div className='mb-4px font-medium font-20px text-20px'>{me.name}</div>
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
