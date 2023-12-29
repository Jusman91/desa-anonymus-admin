import { menuItems } from '@/static/menu-items';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const Menus = () => {
	const navigate = useNavigate();
	const handleNavigate: MenuProps['onClick'] = (e) => {
		navigate(e.key);
		localStorage.setItem(
			'selectedKeys',
			JSON.stringify([e.key]),
		);
	};

	const defaultSelectedKeys = JSON.parse(
		localStorage.getItem('selectedKeys') ||
			'["/dashboard"]',
	);
	return (
		<Menu
			items={menuItems}
			selectedKeys={defaultSelectedKeys}
			onClick={handleNavigate}
		/>
	);
};

export default Menus;
