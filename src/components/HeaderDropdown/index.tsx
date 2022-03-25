import { Dropdown } from 'antd'
import classNames from 'classnames'

import styles from './index.module.less'

import type { DropDownProps } from 'antd/es/dropdown'

export type HeaderDropdownProps = {
  overlayClassName?: string
  overlay: React.ReactNode | (() => React.ReactNode) | any
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomCenter'
} & Omit<DropDownProps, 'overlay'>

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  overlayClassName: cls,
  ...restProps
}) => (
  <Dropdown
    overlayClassName={classNames(styles.container, cls)}
    {...restProps}
  />
)

export default HeaderDropdown
