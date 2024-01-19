import { menuItems } from '@/static/menu-items';
import Menus from './menus';
import ProfileAdmin from './profile-admin';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

const SideBar = () => {
	const navigate = useNavigate();

	const handleNavigate: MenuProps['onClick'] = (e) => {
		navigate(e.key);
		sessionStorage.setItem(
			'selectedKeys',
			JSON.stringify([e.key]),
		);
	};

	const selectedKeys = JSON.parse(
		sessionStorage.getItem('selectedKeys') || '["/"]',
	);

	return (
		<section>
			<ProfileAdmin />
			<Menus
				items={menuItems}
				selectedKeys={selectedKeys}
				onClick={handleNavigate}
			/>
		</section>
	);
};

export default SideBar;
