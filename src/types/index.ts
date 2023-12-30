import React from 'react';
import { MenuProps } from 'antd';

export type DivElement =
	React.HTMLAttributes<HTMLDivElement>;

export type MenuItems =
	Required<MenuProps>['items'][number];
export interface ICollapseProps {
	toggleCollapse: () => void;
	collapse: boolean;
}
export interface IErrorUseContext {
	context: unknown;
	message: string;
}

export interface IMenus {
	items: MenuProps['items'];
	selectedKeys: string[];
	onClick: MenuProps['onClick'];
}
