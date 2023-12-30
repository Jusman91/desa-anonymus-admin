import { Badge } from 'antd';
import Icon from '../elements/icon';
import { MdNotifications } from 'react-icons/md';

const Notification = () => {
	return (
		<Badge
			count={5}
			size='small'
			className='cursor-pointer'>
			<Icon>
				<MdNotifications />
			</Icon>
		</Badge>
	);
};

export default Notification;
