import { AuthFormContext } from '@/contexts/auth-form-context';
import { MenuCollapseContext } from '@/contexts/menu-collapse-context';
import { ThemeContext } from '@/contexts/theme-context';
import { UserFormContext } from '@/contexts/user-form-context';
import { UsersContext } from '@/contexts/users-context';
import {
	IAuthFormContextProps,
	ICollapseProps,
	IErrorUseContext,
	IThemeContext,
	IUserFormContext,
	IUsersContext,
} from '@/types';
import { useContext } from 'react';

const throwError = ({
	context,
	message,
}: IErrorUseContext) => {
	if (!context) {
		throw Error(
			`use${message} must be used inside an ${message}Provider`,
		);
	}
};

export function useThemeContext(): IThemeContext {
	const context = useContext(ThemeContext);
	throwError({ context, message: 'ThemeContext' });
	return context as IThemeContext;
}

export function useMenuCollapseContext(): ICollapseProps {
	const context = useContext(MenuCollapseContext);
	throwError({ context, message: 'MenuCollapseContext' });
	return context as ICollapseProps;
}

export function useAuthFormContext(): IAuthFormContextProps {
	const context = useContext(AuthFormContext);
	throwError({ context, message: 'AuthFormContext' });
	return context as IAuthFormContextProps;
}

export function useUserFormContext(): IUserFormContext {
	const context = useContext(UserFormContext);
	throwError({ context, message: 'UserFormContext' });
	return context as IUserFormContext;
}

export function useUsersContext(): IUsersContext {
	const context = useContext(UsersContext);
	throwError({ context, message: 'UsersContext' });
	return context as IUsersContext;
}
