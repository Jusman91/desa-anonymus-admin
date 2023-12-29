import Message from './message';
import Notification from './notification';
import Search from './search';

const RightSide = () => {
	return (
		<aside className='flex items-center gap-2'>
			<Search />
			<div className='pt-1'>
				<Message />
				<Notification />
			</div>
		</aside>
	);
};

export default RightSide;
