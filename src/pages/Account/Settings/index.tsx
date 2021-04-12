import { Card } from 'antd';

import ComingSoon from '@/components/ComingSoon';

export default function AccountCenter() {
  return (
    <Card bordered={false} style={{ marginBottom: 24 }}>
      <ComingSoon />
    </Card>
  );
}
