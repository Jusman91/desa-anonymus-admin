import { Input } from 'antd';
import { forwardRef } from 'react';
import type { InputRef } from 'antd';
import { IColumnSearchInputProps } from '@/types';
import { useTableHandlers } from '@/hooks/use-table-handlers';
// import { HandleGlobalSearch } from '@/handlers/table-handlers';

export const ColumnSearchInput = forwardRef<
	InputRef,
	IColumnSearchInputProps
>(({ selectedKeys, setSelectedKeys, ...rest }, ref) => {
	return (
		<Input
			className='mb-2 block'
			ref={ref}
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
			{...rest}
		/>
	);
});

export const GlobalSearchInput = () => {
	const { handleGlobalSearch } = useTableHandlers();
	return (
		<Input.Search
			autoComplete='off'
			placeholder='Search...'
			allowClear
			enterButton
			size='small'
			onSearch={handleGlobalSearch}
		/>
	);
};
