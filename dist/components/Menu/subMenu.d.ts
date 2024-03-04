import React from "react";
export interface subMenuProps {
    index?: string;
    title: string;
    className?: string;
    children?: React.ReactNode;
}
declare const SubMenu: React.FC<subMenuProps>;
export default SubMenu;
