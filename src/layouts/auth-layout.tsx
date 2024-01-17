import { AuthFormContextProvider } from '@/contexts/auth-form-context';
import { getUser } from '@/handlers/handle-session';
import { useTheme } from '@/hooks/use-theme';
import { ConfigProvider, Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
	const { authTheme } = useTheme();
	const user = getUser();
	if (user) return <Navigate to={'/'} />;
	return (
		<ConfigProvider theme={authTheme}>
			<AuthFormContextProvider>
				<Layout className='grid place-items-center min-h-screen'>
					<Outlet />
				</Layout>
			</AuthFormContextProvider>
		</ConfigProvider>
	);
};

export default AuthLayout;
