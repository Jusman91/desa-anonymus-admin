import { Avatar, Flex } from 'antd';
import DEFAULT_PROFILE from '@/assets/img/user_default.jpg';
import { useMenuCollapseContext } from '@/hooks/use-context';
import { cn } from '@/lib/utils';

const ProfileAdmin = () => {
	const { collapse } = useMenuCollapseContext();

	return (
		<Flex align='center' gap={8}>
			<Avatar src={DEFAULT_PROFILE} size={'large'} />
			<Flex
				vertical
				className={cn(
					collapse ? 'w-0 opacity-0' : 'w-fit opacit-100',
					'transition-all duration-300 text-white font-semibold',
				)}>
				<small className='text-xs leading-none'>
					Admin
				</small>
				<small className='text-[10px] opacity-55'>
					Administrator
				</small>
			</Flex>
		</Flex>
	);
};

export default ProfileAdmin;
