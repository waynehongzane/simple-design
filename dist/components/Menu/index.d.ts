import { FC } from 'react';
import { MenuProps } from './menu';
import { subMenuProps } from './subMenu';
import { MenuItemProps } from './menuItem';
export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<subMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
