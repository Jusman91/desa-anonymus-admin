import { Switch } from 'antd';
import Icon from '../elements/icon';
import {
	MdDarkMode,
	MdOutlineLightMode,
} from 'react-icons/md';
import { useThemeContext } from '@/hooks/use-context';

const ButtonToggleTheme = () => {
	const { myTheme, toggleMyTheme } = useThemeContext();
	return (
		<Switch
			size='small'
			checked={myTheme === 'dark'}
			checkedChildren={
				<Icon>
					<MdDarkMode />
				</Icon>
			}
			unCheckedChildren={
				<Icon>
					<MdOutlineLightMode />
				</Icon>
			}
			onClick={toggleMyTheme}
		/>
	);
};

export default ButtonToggleTheme;
