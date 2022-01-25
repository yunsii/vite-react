type AriaAttributes = import('react').AriaAttributes;
type DOMAttributes<T> = import('react').DOMAttributes<T>;

declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    mb?: string;
    bg?: string;
    border?: string;
    outline?: string;
    transform?: string;
  }
}

declare module 'antd/dist/theme';
