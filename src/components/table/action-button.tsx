import { Flex, Tooltip } from 'antd';
import Button from '../elements/button';
import { useTableHandlers } from '@/hooks/use-table-handlers';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Icon from '../elements/icon';
import { ITableActionButtonProps } from '@/types';

const ActionButton = ({
	id,
	role,
	link,
}: ITableActionButtonProps) => {
	const { handleButtonDeleteClick } = useTableHandlers();

	return (
		<Flex gap={2}>
			<Tooltip title='Edit' color='volcano'>
				<Link to={link} className='group'>
					<Button
						type='link'
						icon={
							<Icon className='text-orange-600 group-hover:text-orange-300 duration-300'>
								<MdEdit />
							</Icon>
						}
					/>
				</Link>
			</Tooltip>
			<Tooltip title='Delete' color='red'>
				<>
					<Button
						type='link'
						disabled={role === 'admin' ? true : false}
						icon={<MdDelete />}
						danger
						onClick={() => handleButtonDeleteClick(id)}
					/>
				</>
			</Tooltip>
		</Flex>
	);
};

export default ActionButton;
