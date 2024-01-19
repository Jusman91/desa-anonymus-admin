import { UserFormContextProvider } from '@/contexts/user-form-context';
import { Outlet } from 'react-router-dom';

const UsersLayout = () => {
	return (
		<UserFormContextProvider>
			<Outlet />
		</UserFormContextProvider>
	);
};

export default UsersLayout;
