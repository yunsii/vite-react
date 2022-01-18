import type { AriaAttributes, DOMAttributes } from 'react';

declare module 'antd/dist/theme';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    mb?: string;
  }
}
