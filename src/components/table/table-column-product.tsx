import { IProduct } from '@/types';
import { Avatar, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import DEFAULT_THUMBNAIL from '@/assets/img/default_thumbnail.png';
import ColumnSearch from './get-column-search';
import { ColumFilter } from './get-column-filter';
import { formatDate } from '@/lib/utils/utils';
import Button from '../elements/button';
import { Link } from 'react-router-dom';
import { useTableHandlers } from '@/hooks/use-table-handlers';

const TableColumnProduct = () => {
	const getColumnSearchProps = ColumnSearch();
	const { filterObjCategory, filterObjInStock } =
		ColumFilter('product');
	const { handleButtonDeleteClick } = useTableHandlers();

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
						src={thumbnail ? thumbnail : DEFAULT_THUMBNAIL}
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
			sortDirections: ['ascend', 'descend'],
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
			sortDirections: ['ascend', 'descend'],
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
			sortDirections: ['ascend', 'descend'],
		},
		{
			title: 'Action',
			key: 'action',
			align: 'center',
			width: '10%',
			render: (_, record) => (
				<Space>
					<Button size='small' style={{ fontSize: 12 }}>
						<Link to={`/products/${record._id}/edit`}>
							Edit
						</Link>
					</Button>
					<Button
						size='small'
						type='primary'
						danger
						onClick={() =>
							handleButtonDeleteClick(record._id)
						}
						style={{ fontSize: 12 }}>
						Delete
					</Button>
				</Space>
			),
		},
	];
	return { columnProduct };
};

export default TableColumnProduct;
