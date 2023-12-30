import { Badge } from 'antd';
import Icon from '../elements/icon';
import { MdChat } from 'react-icons/md';

const Message = () => {
	return (
		<Badge dot className='cursor-pointer'>
			<Icon>
				<MdChat />
			</Icon>
		</Badge>
	);
};

export default Message;
