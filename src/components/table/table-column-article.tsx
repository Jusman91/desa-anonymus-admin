import { IArticle } from '@/types';
import { Avatar, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import DEFAULT_THUMBNAIL from '@/assets/img/default_thumbnail.png';
import ColumnSearch from './get-column-search';
import { ColumFilter } from './get-column-filter';
import { formatDate } from '@/lib/utils/utils';
import Button from '../elements/button';

const TableColumnArticle = () => {
	const getColumnSearchProps = ColumnSearch();
	const { filterObjCategory } = ColumFilter('article');
	const columnArticle: ColumnsType<IArticle> = [
		{
			title: 'Thumbnail',
			dataIndex: 'thumbnail',
			key: 'thumbnail',
			width: '7%',
			align: 'center',
			render: (_, { thumbnail }) => {
				return (
					<Avatar
						src={thumbnail ? thumbnail : DEFAULT_THUMBNAIL}
					/>
				);
			},
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			ellipsis: true,
			className: 'capitalize',
			...getColumnSearchProps('title'),
			sorter: {
				multiple: 3,
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Author',
			dataIndex: 'author',
			key: 'author',
			align: 'center',
			width: '15%',
			...getColumnSearchProps('author'),
			sorter: {
				multiple: 2,
			},
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			align: 'center',
			width: '15%',
			className: 'capitalize',
			...filterObjCategory,
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			align: 'center',
			ellipsis: true,
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
	return { columnArticle };
};

export default TableColumnArticle;
