import TOTAL_LOGO from '@/assets/img/total-log.png';
import { ISmallTtitle } from '@/types';
import { Flex } from 'antd';

const SmallTitle = ({ title }: ISmallTtitle) => {
	return (
		<Flex align='center' gap={4}>
			<img src={TOTAL_LOGO} alt='' />
			<small className='text-white font-bold opacity-55 w-fit'>
				{title}
			</small>
		</Flex>
	);
};

export default SmallTitle;
