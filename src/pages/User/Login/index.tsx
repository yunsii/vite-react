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
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';

import { useModuleWithConnect } from '@/services/concent';
import { getFakeCaptcha } from '@/services/login';
import type { LoginParamsType } from '@/services/login';

import styles from './index.module.less';

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
          <Tabs.TabPane key='account' tab='账户密码登录' />
          <Tabs.TabPane key='mobile' tab='手机号登录' />
        </Tabs>

        {state.status === 'error' && state.type === 'account' && !submitting && (
          <LoginMessage content='账户或密码错误（admin/vite-react)' />
        )}
        {type === 'account' && (
          <>
            <ProFormText
              name='userName'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder='用户名: admin or user'
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
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
              placeholder='密码: vite-react'
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}

        {state.status === 'error' && state.type === 'mobile' && !submitting && (
          <LoginMessage content='验证码错误' />
        )}
        {type === 'mobile' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={styles.prefixIcon} />,
              }}
              name='mobile'
              placeholder='手机号'
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
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
              placeholder='请输入验证码'
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} '获取验证码'`;
                }
                return '获取验证码';
              }}
              name='captcha'
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async (mobile) => {
                const result = await getFakeCaptcha(mobile);
                if (result === false) {
                  return;
                }
                message.success('获取验证码成功！验证码为：1234');
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
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </ProForm>
      <Space className={styles.other}>
        <div>其他登录方式</div>
        <AlipayCircleOutlined className={styles.icon} />
        <TaobaoCircleOutlined className={styles.icon} />
        <WeiboCircleOutlined className={styles.icon} />
      </Space>
    </div>
  );
};

export default Login;
