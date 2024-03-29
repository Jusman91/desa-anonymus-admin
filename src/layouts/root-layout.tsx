import Footer from '@/components/footer/footer';
import ButtonCollapse from '@/components/fragments/button-collapse';
import Navbar from '@/components/header/navbar';
import SideBar from '@/components/sidebar/side-bar';
import { useMenuCollapseContext } from '@/hooks/use-context';
import { getUser } from '@/handlers/handle-session';
import { ConfigProvider, Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { useTheme } from '@/hooks/use-theme';
import { TableContextProvider } from '@/contexts/table-context';
import { FormContextProvider } from '@/contexts/form-context';

const { Header, Sider, Content } = Layout;
const RootLayout = () => {
	const { rootTheme } = useTheme();
	const { collapse, toggleCollapse } =
		useMenuCollapseContext();
	const user = getUser();

	if (!user) return <Navigate to={'/auth/login'} />;

	return (
		<ConfigProvider theme={rootTheme}>
			<TableContextProvider>
				<FormContextProvider>
					<main className='relative'>
						<Layout>
							<section className='sticky top-0 h-screen'>
								<Sider
									collapsed={collapse}
									theme='light'
									className='custom-scrollbar h-full shadow-md overflow-y-scroll overflow-x-hidden p-2'>
									<SideBar />
								</Sider>
								<ButtonCollapse
									toggleCollapse={toggleCollapse}
									collapse={collapse}
								/>
							</section>
							<Layout className='px-4'>
								<Header className='flex h-14 items-center rounded-md bg-bkg-container pl-2 shadow-md pr-4 sticky top-0 z-[999]'>
									<Navbar />
								</Header>
								<Content className='py-2'>
									<Outlet />
								</Content>
								<Footer />
							</Layout>
						</Layout>
					</main>
				</FormContextProvider>
			</TableContextProvider>
		</ConfigProvider>
	);
};

export default RootLayout;
