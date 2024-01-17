import { useLocation } from 'react-router-dom';
import CustomTypography from '../elements/typography';

const LeftSide = () => {
	const location = useLocation();
	const titleBar =
		location.pathname.split('/').reverse()[0] ||
		'dashboard';
	return (
		<aside>
			<CustomTypography className='capitalize'>
				{titleBar}
			</CustomTypography>
		</aside>
	);
};

export default LeftSide;
