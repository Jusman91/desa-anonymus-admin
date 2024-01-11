import { Input } from 'antd';
import { forwardRef } from 'react';
import type { InputRef } from 'antd';
import { ColumnSearchInputProps } from '@/types';

export const ColumnSearchInput = forwardRef<
	InputRef,
	ColumnSearchInputProps
>(({ dataIndex, onPressEnter, ...rest }, ref) => {
	return (
		<Input
			ref={ref}
			placeholder={`Search ${dataIndex}`}
			onPressEnter={onPressEnter}
			{...rest}
			style={{ marginBottom: 8, display: 'block' }}
		/>
	);
});
