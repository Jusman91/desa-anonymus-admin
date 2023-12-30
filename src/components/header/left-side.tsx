import { useLocation } from 'react-router-dom';

const LeftSide = () => {
	const location = useLocation();
	const titleBar =
		location.pathname.split('/').pop() || 'dashboard';
	return (
		<aside>
			<h5 className='capitalize text-sm font-medium'>
				{titleBar}
			</h5>
		</aside>
	);
};

export default LeftSide;
