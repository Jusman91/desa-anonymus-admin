import { IUser } from '@/types';
import { Avatar, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import DEFAULT_PROFILE from '@/assets/img/user_default.jpg';
import ColumnSearch from './get-column-search';
import { formatDate } from '@/lib/utils/utils';
import Button from '../elements/button';

const TableColumnUser = () => {
	const getColumnSearchProps = ColumnSearch();
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
	return { columnUser };
};

export default TableColumnUser;