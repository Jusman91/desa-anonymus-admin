import { UserFormContextProvider } from '@/contexts/user-form-context';
import { UserContextProvider } from '@/contexts/users-context';
import { Outlet } from 'react-router-dom';

const UsersLayout = () => {
	return (
		// <UserContextProvider>
		<UserFormContextProvider>
			<Outlet />
		</UserFormContextProvider>
		// </UserContextProvider>
	);
};

export default UsersLayout;
