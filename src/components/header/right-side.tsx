import { Space } from 'antd';
import Message from './message';
import Notification from './notification';
import Search from './search';

const RightSide = () => {
	return (
		<aside className='flex items-center gap-2'>
			<Search />
			<Space className='pt-2'>
				<Message />
				<Notification />
			</Space>
		</aside>
	);
};

export default RightSide;
