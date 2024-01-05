import React from 'react';
import { MenuProps } from 'antd';
import { ChartOptions } from 'chart.js';
import { Rule } from 'antd/es/form';
import { AxiosError } from 'axios';

export type DivElement =
	React.HTMLAttributes<HTMLDivElement>;

export type TypogaraphyElement =
	React.HTMLAttributes<HTMLHeadingElement>;

export type MenuItems =
	Required<MenuProps>['items'][number];

// auth
export interface ILoginInput {
	email: string;
	password: string;
}
export interface ILoginResponse {
	message: string;
	accessToken: string;
}
export interface IUserAdmin {
	_id: string;
	username: string;
	email: string;
	profilePic: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
export interface IRulesLogin {
	email: Rule[];
	password: Rule[];
}
export interface IAuthFormContextProps {
	handleSubmit: (value: ILoginInput) => void;
	loginIsPending: boolean;
}
// end auth
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

export interface ISmallTtitle {
	title: string;
}
export interface TotalData {
	title: string;
	total: number;
	path: string;
	percent: number;
	dataChart: number[];
}
export interface ITotalDataProps
	extends ChartOptions<'line'> {
	data: TotalData;
}
export interface IChartConfigOptions {
	services?: boolean | undefined;
}
export interface IAnalitycsData {
	title: string;
	dataChart: number[];
}
export interface IAnalitycsDataProps
	extends IChartConfigOptions {
	data: IAnalitycsData;
}
export interface INewArticle {
	title: string;
	author: string;
	category: string;
	thumbnail: string;
}

export interface INewProduct {
	name: string;
	price: number;
	category: string;
	thumbnail: string;
}

export interface INewDataProps {
	data: INewArticle | INewProduct;
}

export interface ICreateUser {
	username: string;
	email: string;
	password: string;
}
export interface IResponseError extends AxiosError {
	message: string;
	status: number;
}

export type MessageType =
	| 'success'
	| 'info'
	| 'warning'
	| 'error';
