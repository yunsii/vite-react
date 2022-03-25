import { Card, Alert, Skeleton } from 'antd'

export default function ComingSoon() {
  return (
    <Card bordered={false}>
      <Alert type='info' message='Coming soon...' />
      <Skeleton />
    </Card>
  )
}
