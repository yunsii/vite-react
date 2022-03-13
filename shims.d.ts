type AriaAttributes = import('react').AriaAttributes;
type DOMAttributes<T> = import('react').DOMAttributes<T>;

declare module 'antd/dist/theme';

declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    mb?: string;
  }
}
