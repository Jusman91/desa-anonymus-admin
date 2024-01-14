import { AuthFormContext } from '@/contexts/auth-form-context';
import { MenuCollapseContext } from '@/contexts/menu-collapse-context';
import { ThemeContext } from '@/contexts/theme-context';
import {
	IAuthFormContextProps,
	ICollapseProps,
	IErrorUseContext,
	IThemeContext,
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
