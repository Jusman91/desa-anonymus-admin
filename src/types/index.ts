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
	FilterConfirmProps,
	FilterValue,
	SorterResult,
} from 'antd/es/table/interface';
import type { FormInstance, InputProps } from 'antd';

export type DivElement =
	React.HTMLAttributes<HTMLDivElement>;

export type TypogaraphyElement =
	React.HTMLAttributes<HTMLHeadingElement>;

export type InputChange =
	React.ChangeEventHandler<HTMLInputElement>;

export type OnPressEnter =
	React.KeyboardEventHandler<HTMLInputElement>;

export type FormSubmit = React.FormEvent<HTMLFormElement>;

export type MenuItems =
	Required<MenuProps>['items'][number];
export interface IThemeContext {
	myTheme: string;
	toggleMyTheme: () => void;
}
export interface IOnClick {
	onClick: () => void;
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
export type QueryParams =
	| 'page'
	| 'limit'
	| 'sort'
	| 'search'
	| 'category'
	| 'inStock'
	| 'price';
export interface IUploadFile {
	url: string;
	file: File;
}
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
export type UserFormNameProps =
	| 'create-user'
	| 'update-user';
export interface IUserFormContext {
	form: FormInstance;
	formName: string;
	setFormName: (value: UserFormNameProps) => void;
}
export interface ICreateUser {
	username: string;
	email: string;
	password: string;
	role: string;
}
export interface IUser {
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
export interface IUpdateUserFnParams {
	id: string;
	formData: IUpdateUser;
}
export interface IRulesFormUser {
	username: Rule[];
	email: Rule[];
	password: Rule[];
	profilePic?: Rule[];
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
	loading: boolean | undefined;
	addData: string;
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
}
export interface IColumnSearchInputProps
	extends InputProps {
	selectedKeys: string[];
	setSelectedKeys: (keys: string[]) => void;
}
export interface IHandleColumnSearchProps {
	selectedKeys: string[];
	confirm: (param?: FilterConfirmProps) => void;
	dataIndex: string;
	setSearchedColumn: (index: string) => void;
}
export interface IHandleTableGlobalResetProps {
	deleteAllQuerys: () => void;
}
export interface IHandleColumnResetProps {
	clearFilters: () => void;
}
export interface IHandleColumnCloseProps {
	close: () => void;
}
export interface ITableContext {
	open: boolean;
	idDelete: string;
	setOpen: (open: boolean) => void;
	setIdDelete: (id: string) => void;
}

// end table
export type MessageType =
	| 'success'
	| 'info'
	| 'warning'
	| 'error';
