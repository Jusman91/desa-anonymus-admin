import { useToggle } from '@/hooks/use-toggle';
import { cn } from '@/lib/utils';
import { Flex, Input } from 'antd';
import { IoSearchCircleSharp } from 'react-icons/io5';
import Icon from '../elements/icon';

const Search = () => {
	const [active, toggleActive] = useToggle(false);
	return (
		<Flex justify='center' align='center'>
			<Input
				placeholder='Search...'
				className={cn(
					active ? 'w-48 opacity-100' : 'w-0 opacity-0',
					'transition-all py-0 duration-500 border-t-0 border-x-0 rounded-none outline-none focus:outline-none focus:ring-0 bg-',
				)}
			/>
			<Icon
				onClick={toggleActive}
				className='text-lg cursor-pointer'>
				<IoSearchCircleSharp />
			</Icon>
		</Flex>
	);
};

export default Search;
