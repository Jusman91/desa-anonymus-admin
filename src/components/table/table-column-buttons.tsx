import { MdSearch } from 'react-icons/md';
import Button from '../elements/button';
import Icon from '../elements/icon';
import { IOnClick } from '@/types';
import { useTableHandlers } from '@/hooks/use-table-handlers';

export const ColumnSearchButton = ({
	onClick,
}: IOnClick) => {
	return (
		<Button
			type='primary'
			className='text-[10px] px-1 py-[2px] w-fit h-fit'
			icon={
				<Icon className='text-sm'>
					<MdSearch />
				</Icon>
			}
			onClick={onClick}>
			Search
		</Button>
	);
};

export const ColumnResetButton = ({
	onClick,
}: IOnClick) => {
	return (
		<Button
			onClick={onClick}
			className='text-[10px] py-[2px] w-fit h-fit'>
			Reset
		</Button>
	);
};

export const ColumnCloseButton = ({
	onClick,
}: IOnClick) => {
	return (
		<Button
			// type='link'
			onClick={onClick}
			className='text-[10px] p-0 h-0 border-none'>
			Close
		</Button>
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
