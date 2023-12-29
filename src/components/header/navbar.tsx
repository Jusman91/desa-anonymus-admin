import LeftSide from './left-side';
import RightSide from './right-side';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center w-full'>
			<LeftSide />
			<RightSide />
		</nav>
	);
};

export default Navbar;
