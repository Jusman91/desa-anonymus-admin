import Footer from '@/components/footer/footer';
import Navbar from '@/components/header/navbar';
import SideBar from '@/components/sidebar/side-bar';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const RootLayout = () => {
	return (
		<main className='relative'>
			<Layout>
				<section className='sticky top-0 h-screen'>
					<Sider
						theme='light'
						className='custom-scrollbar h-full overflow-y-scroll p-2'>
						<SideBar />
					</Sider>
				</section>
				<Layout className='px-4 py-2'>
					<Header className='flex h-14 items-center rounded-md bg-[#192930] pl-2 pr-4 sticky top-2'>
						<Navbar />
					</Header>
					<Content>
						<Outlet />
					</Content>
					<Footer />
				</Layout>
			</Layout>
		</main>
	);
};

export default RootLayout;
