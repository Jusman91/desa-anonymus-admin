import { AuthFormContextProvider } from '@/contexts/auth-form-context';
import { getUser } from '@/handlers/handle-session';
import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
	const user = getUser();
	if (user) return <Navigate to={'/'} />;
	return (
		<AuthFormContextProvider>
			<Layout className='grid place-items-center min-h-screen'>
				<Outlet />
			</Layout>
		</AuthFormContextProvider>
	);
};

export default AuthLayout;
