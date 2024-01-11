import { DataIndex } from '@/types';
import { Space } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import Icon from '../elements/icon';
import { MdManageSearch } from 'react-icons/md';
import Highlighter from 'react-highlight-words';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import {
	ColumnCloseButton,
	ColumnResetButton,
	ColumnSearchButton,
} from './table-column-buttons';
import { ColumnSearchInput } from './column-search-input';

const ColumnSearch = () => {
	const [searchedColumn, setSearchedColumn] = useState('');
	const { search, setSearchQuery, deleteQuery } =
		useSearchParamsQuery();
	const searchInput = useRef<InputRef>(null);

	const handleSearch = (
		selectedKeys: string[],
		confirm: (param?: FilterConfirmProps) => void,
		dataIndex: string,
	) => {
		confirm();
		setSearchedColumn(dataIndex.toString());
		if (selectedKeys.length > 0) {
			setSearchQuery(selectedKeys[0]);
		}
		deleteQuery('page');
		deleteQuery('sort');
		deleteQuery('limit');
		deleteQuery('inStock');
	};

	const handleReset = (clearFilters: () => void) => {
		clearFilters();
		deleteQuery('search');
		deleteQuery('sort');
	};

	const getColumnSearchProps = <T extends object>(
		dataIndex: DataIndex<T>,
	): ColumnType<T> => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
			close,
		}) => (
			<div
				style={{ padding: 8 }}
				onKeyDown={(e) => e.stopPropagation()}>
				<ColumnSearchInput
					ref={searchInput}
					dataIndex={dataIndex.toString()}
					value={
						selectedKeys.length > 0
							? String(selectedKeys[0])
							: undefined
					}
					onChange={(e) =>
						setSelectedKeys(
							e.target.value ? [e.target.value] : [],
						)
					}
					onPressEnter={() =>
						handleSearch(
							selectedKeys as string[],
							confirm,
							dataIndex.toString(),
						)
					}
				/>
				<Space>
					<ColumnSearchButton
						onClick={() =>
							handleSearch(
								selectedKeys as string[],
								confirm,
								dataIndex.toString(),
							)
						}
					/>
					<ColumnResetButton
						onClick={() =>
							clearFilters && handleReset(clearFilters)
						}
					/>
					<ColumnCloseButton
						onClick={() => {
							close();
						}}
					/>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<Icon
				className={`${filtered ? 'text-[#1677ff]' : ''}`}>
				<MdManageSearch />
			</Icon>
		),
		// onFilter: (value, record) =>
		// 	record[dataIndex]
		// 		? record[dataIndex]
		// 				.toString()
		// 				.toLowerCase()
		// 				.includes((value as string).toLowerCase())
		// 		: false,
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(
					() => searchInput.current?.select(),
					100,
				);
			}
		},

		render: (text: string) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[search as string]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	});

	return getColumnSearchProps;
};

export default ColumnSearch;
