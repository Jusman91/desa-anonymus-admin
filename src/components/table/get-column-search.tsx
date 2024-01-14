import { DataIndex } from '@/types';
import { Flex } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import Icon from '../elements/icon';
import { MdManageSearch } from 'react-icons/md';
import Highlighter from 'react-highlight-words';
import { useSearchParamsQuery } from '@/hooks/use-search-params';
import {
	ColumnCloseButton,
	ColumnResetButton,
	ColumnSearchButton,
} from './table-column-buttons';
import { ColumnSearchInput } from './column-search-input';
import { useTableHandlers } from '@/hooks/use-table-handlers';

const ColumnSearch = () => {
	const [searchedColumn, setSearchedColumn] = useState('');
	const { search } = useSearchParamsQuery();
	const searchInput = useRef<InputRef>(null);
	const {
		handleColumnSearch,
		handleColumnReset,
		handleColumnClose,
	} = useTableHandlers();

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
				className='p-2'
				onKeyDown={(e) => e.stopPropagation()}>
				<ColumnSearchInput
					ref={searchInput}
					placeholder={`Search ${String(dataIndex)}`}
					selectedKeys={selectedKeys as string[]}
					setSelectedKeys={setSelectedKeys}
					onPressEnter={() =>
						handleColumnSearch({
							confirm,
							dataIndex: dataIndex.toString(),
							selectedKeys: selectedKeys as string[],
							setSearchedColumn,
						})
					}
				/>
				<Flex justify='flex-start' align='center' gap={8}>
					<ColumnSearchButton
						onClick={() =>
							handleColumnSearch({
								confirm,
								dataIndex: dataIndex.toString(),
								selectedKeys: selectedKeys as string[],
								setSearchedColumn,
							})
						}
					/>
					<ColumnResetButton
						onClick={() =>
							clearFilters &&
							handleColumnReset({ clearFilters })
						}
					/>
					<ColumnCloseButton
						onClick={() => handleColumnClose({ close })}
					/>
				</Flex>
			</div>
		),
		filterIcon: (filtered) => (
			<Icon
				className={`${filtered ? 'text-[#1677ff]' : ''}`}>
				<MdManageSearch />
			</Icon>
		),
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
