import { Button, Tooltip } from 'antd';
import Icon from '../elements/icon';
import { MdArrowBackIosNew } from 'react-icons/md';
import { ICollapseProps } from '@/types';
import { cn } from '@/lib/utils/utils';

const ButtonCollapse = ({
	toggleCollapse,
	collapse,
}: ICollapseProps) => {
	return (
		<Tooltip title='Collapse'>
			<Button
				onClick={toggleCollapse}
				type='primary'
				shape='circle'
				size='small'
				className='absolute -right-[5%] top-1'>
				{
					<Icon
						className={cn(
							collapse ? 'rotate-180' : '',
							'transition-all duration-500',
						)}>
						<MdArrowBackIosNew />
					</Icon>
				}
			</Button>
		</Tooltip>
	);
};

export default ButtonCollapse;
