// ref: https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.ts

/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage: Record<number, string> = {
  200: 'The server successfully returns the requested data.',
  201: 'New or modify the data success.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'Delete data success.',
  400: 'The requested request has an error, and the server does not make new or modify the data.',
  401: 'The user has no permission (token, user name, password error).',
  403: 'The user is authorized, but the access is disabled.',
  404: 'The request for the request is not a record, and the server does not operate.',
  406: 'The format of the request is not available.',
  410: 'The requested resource is permanently deleted and will not be obtained.',
  422: 'A verification error occurs when an object is created.',
  500: 'The server has an error, please check the server.',
  502: 'Gateway error.',
  503: 'Service is not available, the server temporarily overloads or maintains.',
  504: 'Gateway timeout.',
};

/** Abnormal handler */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `Request error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Your network has an exception, unable to connect the server',
      message: 'network anomaly',
    });
  }
  return response;
};

/** Default parameters when configuring request requests */
const request = extend({
  errorHandler, // Default error handling
  credentials: 'include', // Default request to bring cookie
});

export default request;
