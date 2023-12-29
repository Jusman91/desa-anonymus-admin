import { Avatar, Flex, Typography } from 'antd';
import DEFAULT_PROFILE from '@/assets/img/user_default.jpg';
const { Text } = Typography;

const ProfileAdmin = () => {
	return (
		<Flex align='center' gap={6}>
			<Avatar src={DEFAULT_PROFILE} size={'large'} />
			{/* <img src={DEFAULT_PROFILE} alt='Profile' /> */}
			<Flex vertical>
				<Text className='text-xs leading-none'>Admin</Text>
				<Text type='secondary' className='text-[10px]'>
					Administrator
				</Text>
			</Flex>
		</Flex>
	);
};

export default ProfileAdmin;
