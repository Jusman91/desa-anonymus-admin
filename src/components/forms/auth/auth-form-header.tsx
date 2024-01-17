import CustomTypography from '@/components/elements/typography';
import { Flex } from 'antd';
import ICON_HEADER_AUTH from '@/assets/img/icon-login.png';

const AuthFormHeader = () => {
	return (
		<Flex
			justify='center'
			align='center'
			gap={10}
			className='mb-4'>
			<CustomTypography className='text-center text-white'>
				Login
			</CustomTypography>
			<img src={ICON_HEADER_AUTH} alt='Icon Login' />
		</Flex>
	);
};

export default AuthFormHeader;
