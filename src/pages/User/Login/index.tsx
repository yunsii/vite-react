import { useRef, useState } from 'react';
import { Alert, Space, message, Tabs } from 'antd';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';

import { useModuleWithConnect } from '@/services/concent';
import { getFakeCaptcha } from '@/services/login';
import type { LoginParamsType } from '@/services/login';

import styles from './index.module.less';

import type { ProFormInstance } from '@ant-design/pro-form';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type='error'
    showIcon
  />
);

const Login: React.FC = () => {
  const { state, connectedState, mr } = useModuleWithConnect('login', ['loading']);

  const submitting = connectedState.loading['login/login'];
  const [type, setType] = useState<string>('account');
  const formRef = useRef<ProFormInstance>();

  const handleSubmit = (values: LoginParamsType) => {
    mr.login({ ...values, type });
  };

  return (
    <div className={styles.main}>
      <ProForm
        formRef={formRef}
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          handleSubmit(values as LoginParamsType);
          return Promise.resolve();
        }}
      >
        <Tabs activeKey={type} onChange={setType}>
          <Tabs.TabPane key='account' tab='Account password login' />
          <Tabs.TabPane key='mobile' tab='Mobile phone number login' />
        </Tabs>

        {state.status === 'error' && state.type === 'account' && !submitting && (
          <LoginMessage content='Account or password error（admin/vite-react)' />
        )}
        {type === 'account' && (
          <>
            <ProFormText
              name='userName'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder='Username: admin or user'
              rules={[
                {
                  required: true,
                  message: 'Please enter user name!',
                },
              ]}
            />
            <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
                onPressEnter: () => {
                  formRef.current?.submit();
                },
              }}
              placeholder='password: vite-react'
              rules={[
                {
                  required: true,
                  message: 'Please enter your password!',
                },
              ]}
            />
          </>
        )}

        {state.status === 'error' && state.type === 'mobile' && !submitting && (
          <LoginMessage content='Verification code error' />
        )}
        {type === 'mobile' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={styles.prefixIcon} />,
              }}
              name='mobile'
              placeholder='Phone number'
              rules={[
                {
                  required: true,
                  message: 'Please enter phone number!',
                },
                {
                  pattern: /^\+?998\d{9}$/,
                  message: 'Malformed phone number！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <MailOutlined className={styles.prefixIcon} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder='Please enter verification code'
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} 'get verification code'`;
                }
                return 'Get verification code';
              }}
              name='captcha'
              rules={[
                {
                  required: true,
                  message: 'Please enter verification code!',
                },
              ]}
              onGetCaptcha={async (mobile) => {
                const result = await getFakeCaptcha(mobile);
                if (result === false) {
                  return;
                }
                message.success('Get the verification code successfully! Verification code：1234');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name='autoLogin'>
            automatic log-in
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            Forgot password
          </a>
        </div>
      </ProForm>
      <Space className={styles.other}>
        <div>Other login mode</div>
        <AlipayCircleOutlined className={styles.icon} />
        <TaobaoCircleOutlined className={styles.icon} />
        <WeiboCircleOutlined className={styles.icon} />
      </Space>
    </div>
  );
};

export default Login;
