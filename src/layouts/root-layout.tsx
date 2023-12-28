import Footer from '@/components/footer/footer';
import Navbar from '@/components/header/navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
