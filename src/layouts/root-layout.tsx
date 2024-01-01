import Footer from '@/components/footer/footer';
import ButtonCollapse from '@/components/fragments/button-collapse';
import Navbar from '@/components/header/navbar';
import SideBar from '@/components/sidebar/side-bar';
import { useMenuCollapseContext } from '@/hooks/use-context';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const RootLayout = () => {
	const { collapse, toggleCollapse } =
		useMenuCollapseContext();

	return (
		<main className='relative'>
			<Layout>
				<section className='sticky top-0 h-screen'>
					<Sider
						collapsed={collapse}
						theme='light'
						className='custom-scrollbar h-full overflow-y-scroll p-2'>
						<SideBar />
					</Sider>
					<ButtonCollapse
						toggleCollapse={toggleCollapse}
						collapse={collapse}
					/>
				</section>
				<Layout className='px-4'>
					<Header className='flex h-14 items-center rounded-md bg-[#192930] pl-2 pr-4 sticky top-0'>
						<Navbar />
					</Header>
					<Content className='py-2'>
						<Outlet />
					</Content>
					<Footer />
				</Layout>
			</Layout>
		</main>
	);
};

export default RootLayout;
