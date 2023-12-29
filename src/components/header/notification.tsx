import { Avatar, Badge } from 'antd';
import Icon from '../elements/icon';
import { MdNotifications } from 'react-icons/md';

const Notification = () => {
	return (
		<Badge count={5} size='small'>
			<Avatar
				size={'small'}
				className='bg-transparent cursor-pointer'
				icon={
					<Icon>
						<MdNotifications />
					</Icon>
				}
			/>
		</Badge>
	);
};

export default Notification;
