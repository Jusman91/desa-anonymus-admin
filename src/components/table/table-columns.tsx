import { IProduct, IUser } from '@/types';
import { Avatar, Button, Space } from 'antd';
import DEFAULT_PROFILE from '@/assets/img/user_default.jpg';
import type { ColumnsType } from 'antd/es/table';
import ColumnSearch from './get-column-search';
import { formatDate } from '@/lib/utils/utils';
import { TableColumFilterObj } from './get-table-column-filter';

export const TableColumns = () => {
	const getColumnSearchProps = ColumnSearch();

	const { filterObjCategory, filterObjInStock } =
		TableColumFilterObj();

	const columnUser: ColumnsType<IUser> = [
		{
			title: 'Avatar',
			dataIndex: 'profilePic',
			key: 'profilePic',
			width: '5%',
			align: 'center',
			render: (_, { profilePic }) => {
				return (
					<Avatar
						src={profilePic ? profilePic : DEFAULT_PROFILE}
					/>
				);
			},
		},
		{
			title: 'Username',
			dataIndex: 'username',
			key: 'username',
			className: 'capitalize',
			...getColumnSearchProps('username'),
			sorter: {
				multiple: 4,
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			...getColumnSearchProps('email'),
			sorter: {
				multiple: 3,
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
			align: 'center',
			width: '10%',
			className: 'capitalize',
			sorter: {
				multiple: 2,
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Date',
			dataIndex: 'createdAt',
			key: 'createdAt',
			width: '20%',
			render: (_, { createdAt }) => {
				return <span>{formatDate(createdAt)}</span>;
			},
			sorter: {
				multiple: 1,
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Action',
			key: 'action',
			align: 'center',
			width: '10%',
			render: () => (
				<Space>
					<Button size='small' style={{ fontSize: 12 }}>
						Edit
					</Button>
					<Button
						size='small'
						type='primary'
						danger
						style={{ fontSize: 12 }}>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const columnProduct: ColumnsType<IProduct> = [
		{
			title: 'Thumbnail',
			dataIndex: 'thumbnail',
			key: 'thumbnail',
			width: '7%',
			align: 'center',
			render: (_, { thumbnail }) => {
				return (
					<Avatar
						src={thumbnail ? thumbnail : DEFAULT_PROFILE}
					/>
				);
			},
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			ellipsis: true,
			className: 'capitalize',
			...getColumnSearchProps('name'),
			sorter: {
				multiple: 3,
			},
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
			align: 'center',
			width: '8%',
			sorter: {
				compare: (a, b) => a.price - b.price,
				multiple: 2,
			},
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			align: 'center',
			width: '10%',
			className: 'capitalize',
			...filterObjCategory,
		},
		{
			title: 'Contact',
			dataIndex: 'contact',
			key: 'contact',
			align: 'center',
			width: '10%',
			...getColumnSearchProps('contact'),
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			align: 'center',
			width: '10%',
			ellipsis: true,
		},
		{
			title: 'Location',
			dataIndex: 'location',
			key: 'location',
			align: 'center',
			ellipsis: true,
			...getColumnSearchProps('location'),
		},
		{
			title: 'InStock',
			dataIndex: 'inStock',
			key: 'inStock',
			align: 'center',
			width: '10%',
			render: (_, { inStock }) => {
				const ready = inStock ? 'Ready' : 'Not Ready';
				return (
					<span
						className={`${
							inStock ? 'text-green-600' : 'text-red-600'
						}`}>
						{ready}
					</span>
				);
			},
			...filterObjInStock,
		},
		{
			title: 'Date',
			dataIndex: 'createdAt',
			key: 'createdAt',
			width: '12%',
			render: (_, { createdAt }) => {
				return <span>{formatDate(createdAt)}</span>;
			},
			sorter: {
				multiple: 1,
			},
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Action',
			key: 'action',
			align: 'center',
			width: '10%',
			render: () => (
				<Space>
					<Button size='small' style={{ fontSize: 12 }}>
						Edit
					</Button>
					<Button
						size='small'
						type='primary'
						danger
						style={{ fontSize: 12 }}>
						Delete
					</Button>
				</Space>
			),
		},
	];

	return { columnUser, columnProduct };
};
