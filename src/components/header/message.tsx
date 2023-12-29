import { Avatar, Badge } from 'antd';
import Icon from '../elements/icon';
import { MdChat } from 'react-icons/md';

const Message = () => {
	return (
		<Badge dot>
			<Avatar
				size={'small'}
				className='bg-transparent cursor-pointer'
				icon={
					<Icon>
						<MdChat />
					</Icon>
				}
			/>
		</Badge>
	);
};

export default Message;
