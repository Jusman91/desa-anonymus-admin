import { Avatar, Flex } from 'antd';
import DEFAULT_PROFILE from '@/assets/img/user_default.jpg';
import { useMenuCollapseContext } from '@/hooks/use-context';
import { cn } from '@/lib/utils/utils';
import { getUser } from '@/handlers/handle-session';

const ProfileAdmin = () => {
	const { collapse } = useMenuCollapseContext();
	const { username, profilePic, role } = getUser();

	return (
		<Flex align='center' gap={8}>
			<Avatar
				src={profilePic ? profilePic : DEFAULT_PROFILE}
				size={'large'}
			/>
			<Flex
				vertical
				className={cn(
					collapse ? 'w-0 opacity-0' : 'w-fit opacit-100',
					'transition-all duration-300 text-color-base font-semibold',
				)}>
				<small className='text-xs leading-none'>
					{username}
				</small>
				<small className='text-[10px] opacity-55'>
					{role}
				</small>
			</Flex>
		</Flex>
	);
};

export default ProfileAdmin;
