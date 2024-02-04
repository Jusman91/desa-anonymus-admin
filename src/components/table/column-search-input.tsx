import { Input } from 'antd';
import { forwardRef } from 'react';
import type { InputRef } from 'antd';
import { IColumnSearchInputProps } from '@/types';

export const ColumnSearchInput = forwardRef<
	InputRef,
	IColumnSearchInputProps
>(({ selectedKeys, setSelectedKeys, ...rest }, ref) => {
	return (
		<Input
			className='mb-2 block text-xs'
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
