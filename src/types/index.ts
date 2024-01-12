import React from 'react';
import { MenuProps } from 'antd';
import { ChartOptions } from 'chart.js';
import { Rule } from 'antd/es/form';
import { AxiosError } from 'axios';
import type {
	ColumnsType,
	TablePaginationConfig,
} from 'antd/es/table';
import type {
	FilterValue,
	SorterResult,
} from 'antd/es/table/interface';
import type { InputProps } from 'antd';

export type DivElement =
	React.HTMLAttributes<HTMLDivElement>;

export type TypogaraphyElement =
	React.HTMLAttributes<HTMLHeadingElement>;

export type InputChange =
	| React.ChangeEventHandler<HTMLInputElement>
	| undefined;

export type OnPressEnter =
	| React.KeyboardEventHandler<HTMLInputElement>
	| undefined;

export type MenuItems =
	Required<MenuProps>['items'][number];

export interface IOnClick {
	onClick: (
		ev: React.MouseEvent<HTMLButtonElement>,
	) => void;
}

// auth
export interface ILoginInput {
	email: string;
	password: string;
}
export interface ILoginResponse {
	message: string;
	accessToken: string;
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

// api
export interface IFnParams {
	page: number;
	sort: string | undefined;
	limit: number;
	search: string | undefined;
	inStock?: boolean | undefined;
	category?: string | undefined;
}
export interface IResponseSuccess {
	data: [];
	limit: number;
	page: number;
	pageCount: number;
	totalData: number;
}
export interface IResponseError extends AxiosError {
	message: string;
	status: number;
}
// end api

// home
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
// end home

// user
export interface ICreateUser {
	username: string;
	email: string;
	password: string;
	role: string;
}
export interface IUser {
	key: string;
	_id: string;
	username: string;
	email: string;
	profilePic: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
export interface IUpdateUser {
	username: string;
	role: string;
	profilePic: string;
}
export interface IUpdateUserFnProps {
	id: string;
	formData: IUpdateUser;
}
// end user

// product
export interface ICreateProduct {
	name: string;
	price: number;
	category: string;
	contact: string;
	description: string;
	thumbnail: string;
	location: string;
	inStock: boolean;
}
export interface IProduct extends ICreateProduct {
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
export interface IUpdateProductFnProps {
	id: string;
	formData: ICreateProduct;
}
// end product

// article
export interface ICreateArticle {
	title: string;
	author: string;
	thumbnail: string;
	description: string;
	category: string;
	content: string;
	tags: string[];
	likes: IUser['_id'][];
}
export interface IArticle extends ICreateArticle {
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface IUpdateArticleFnProps {
	id: string;
	formData: ICreateArticle;
}
// end article

// table
export type DataIndex<T> = keyof T;
export interface IDataTableProps<T> {
	data: T[];
	columns: ColumnsType<T>;
	totalData: number;
	loading: boolean;
	onChange: (
		pagination: TablePaginationConfig,
		filters: Record<string, FilterValue | null>,
		sorter: SorterResult<T> | SorterResult<T>[],
	) => void;
}
export interface IHandleTableChangeProps<T> {
	pagination: TablePaginationConfig;
	filters?: Record<string, FilterValue | null>;
	sorter: SorterResult<T> | SorterResult<T>[];
	setPageQuery: (page: string) => void;
	setSortQuery: (sort: string) => void;
	setLimitQuery: (limit: string) => void;
	setInStockQuery?: (inStock: string) => void;
	setCategoryQuery?: (category: string) => void;
	deleteQuery: (query: string) => void;
}

export interface ColumnSearchInputProps extends InputProps {
	dataIndex: string;
	onPressEnter: () => void;
}
// end table
export type MessageType =
	| 'success'
	| 'info'
	| 'warning'
	| 'error';
