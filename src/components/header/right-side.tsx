import Message from './message';
import Notification from './notification';
import Search from './search';
import ButtonToggleTheme from './button-toggle-theme';

const RightSide = () => {
	return (
		<aside className='flex items-center gap-2'>
			<Search />
			<Message />
			<Notification />
			<ButtonToggleTheme />
		</aside>
	);
};

export default RightSide;
