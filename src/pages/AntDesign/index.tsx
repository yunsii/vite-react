import { UserOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-layout'
import {
  Typography,
  Table,
  Card,
  Button,
  Space,
  Divider,
  PageHeader,
  Menu,
  Dropdown,
  Steps,
  Cascader,
  Rate,
  Avatar,
  Carousel,
  Collapse,
  Drawer,
  message,
  notification,
  Skeleton,
  Spin,
} from 'antd'

const menu = (
  <Menu>
    <Menu.Item key='1'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key='2'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item key='3'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export default function AndDesign() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  function onChange(value: any) {
    console.log(value)
  }

  return (
    <PageContainer>
      <Card>
        <Typography.Title level={4}>Button</Typography.Title>
        <Space>
          <Button type='primary'>Hello</Button>
          <Button>World</Button>
        </Space>
        <Divider />

        <Typography.Title level={4}>Dropdown</Typography.Title>
        <Space>
          <Dropdown
            overlay={menu}
            placement='bottomLeft'
            arrow={{ pointAtCenter: true }}
          >
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            placement='bottom'
            arrow={{ pointAtCenter: true }}
          >
            <Button>bottom</Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            placement='bottomRight'
            arrow={{ pointAtCenter: true }}
          >
            <Button>bottomRight</Button>
          </Dropdown>
          <br />
          <Dropdown
            overlay={menu}
            placement='topLeft'
            arrow={{ pointAtCenter: true }}
          >
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            placement='top'
            arrow={{ pointAtCenter: true }}
          >
            <Button>top</Button>
          </Dropdown>
          <Dropdown
            overlay={menu}
            placement='topRight'
            arrow={{ pointAtCenter: true }}
          >
            <Button>topRight</Button>
          </Dropdown>
        </Space>
        <Divider />

        <Typography.Title level={4}>PageHeader</Typography.Title>
        <PageHeader
          className='site-page-header'
          onBack={() => null}
          title='Title'
          subTitle='This is a subtitle'
        />
        <Divider />
        <Typography.Title level={4}>Steps</Typography.Title>
        <Steps current={1}>
          <Steps.Step title='Finished' description='This is a description.' />
          <Steps.Step
            title='In Progress'
            subTitle='Left 00:00:08'
            description='This is a description.'
          />
          <Steps.Step title='Waiting' description='This is a description.' />
        </Steps>
        <Divider />

        <Typography.Title level={4}>Cascader</Typography.Title>
        <Cascader
          options={options}
          onChange={onChange}
          placeholder='Please select'
        />
        <Divider />

        <Typography.Title level={4}>Rate</Typography.Title>
        <Rate />
        <Divider />

        <Typography.Title level={4}>Avatar</Typography.Title>
        <Space>
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size='large' icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar size='small' icon={<UserOutlined />} />
        </Space>
        <br />
        <Space>
          <Avatar shape='square' size={64} icon={<UserOutlined />} />
          <Avatar shape='square' size='large' icon={<UserOutlined />} />
          <Avatar shape='square' icon={<UserOutlined />} />
          <Avatar shape='square' size='small' icon={<UserOutlined />} />
        </Space>
        <Divider />

        <Typography.Title level={4}>Carousel</Typography.Title>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Divider />

        <Typography.Title level={4}>Collapse</Typography.Title>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          <Collapse.Panel header='This is panel header 1' key='1'>
            <p>{text}</p>
          </Collapse.Panel>
          <Collapse.Panel header='This is panel header 2' key='2'>
            <p>{text}</p>
          </Collapse.Panel>
          <Collapse.Panel header='This is panel header 3' key='3'>
            <p>{text}</p>
          </Collapse.Panel>
        </Collapse>
        <Divider />

        <Typography.Title level={4}>Table</Typography.Title>
        <Table pagination={{ total: 100, pageSize: 10 }} />
        <Divider />

        <Typography.Title level={4}>Drawer</Typography.Title>
        <Button type='primary' onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          title='Basic Drawer'
          placement='right'
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Divider />

        <Typography.Title level={4}>Message</Typography.Title>
        <Button
          type='primary'
          onClick={() => {
            message.info('This is a normal message')
          }}
        >
          Display normal message
        </Button>
        <Divider />

        <Typography.Title level={4}>Notification</Typography.Title>
        <Button
          type='primary'
          onClick={() => {
            notification.open({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              onClick: () => {
                console.log('Notification Clicked!')
              },
            })
          }}
        >
          Open the notification box
        </Button>
        <Divider />

        <Typography.Title level={4}>Skeleton</Typography.Title>
        <Skeleton active />
        <Divider />

        <Typography.Title level={4}>Spin</Typography.Title>
        <Spin />
      </Card>
    </PageContainer>
  )
}
