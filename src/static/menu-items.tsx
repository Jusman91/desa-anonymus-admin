import { MenuItems } from '@/types';
import type { MenuProps } from 'antd';
import {
	MdDashboard,
	MdSupervisedUserCircle,
	MdArticle,
	MdShoppingBag,
	MdOutlineSettings,
	MdHelpCenter,
	MdLogout,
} from 'react-icons/md';

function getItem(
	label: React.ReactNode,
	key?: React.Key,
	icon?: React.ReactNode,
	children?: MenuItems[],
	type?: 'group',
): MenuItems {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItems;
}

export const menuItems: MenuProps['items'] = [
	getItem(
		'Page',
		undefined,
		undefined,
		[
			getItem('Dashboard', '/dashboard', <MdDashboard />),
			getItem(
				'Users',
				'/users',
				<MdSupervisedUserCircle />,
			),
			getItem('Articles', '/articles', <MdArticle />),
			getItem('Products', '/products', <MdShoppingBag />),
		],
		'group',
	),
	getItem(
		'User',
		undefined,
		undefined,
		[
			getItem(
				'Settings',
				'settings',
				<MdOutlineSettings />,
			),
			getItem('Help', 'help', <MdHelpCenter />),
			getItem('Logout', 'logout', <MdLogout />),
		],
		'group',
	),
];
