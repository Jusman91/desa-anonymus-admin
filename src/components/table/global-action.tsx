import { useTableHandlers } from '@/hooks/use-table-handlers';
import Button from '../elements/button';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';

export const GlobalAddButton = ({
	addData,
}: {
	addData: string;
}) => {
	return (
		<Link to={`/${addData}/create`}>
			<Button
				type='primary'
				size='small'
				icon={<MdAddCircle />}>
				Add
			</Button>
		</Link>
	);
};

export const GlobalSearchInput = () => {
	const { handleGlobalSearch } = useTableHandlers();
	return (
		<Input.Search
			autoComplete='off'
			placeholder='Search...'
			allowClear
			enterButton
			size='small'
			onSearch={(value) =>
				value.length > 0 && handleGlobalSearch(value)
			}
		/>
	);
};

export const GlobalResetButton = () => {
	const { handleGlobalReset } = useTableHandlers();
	return (
		<Button
			type='primary'
			size='small'
			onClick={handleGlobalReset}>
			Reset
		</Button>
	);
};
