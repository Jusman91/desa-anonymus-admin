import { IMenus } from '@/types';
import { Menu } from 'antd';

const Menus = ({
	items,
	selectedKeys,
	onClick,
}: IMenus) => {
	return (
		<Menu
			items={items}
			selectedKeys={selectedKeys}
			onClick={onClick}
		/>
	);
};

export default Menus;
