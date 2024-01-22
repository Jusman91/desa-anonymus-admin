import { AuthFormContext } from '@/contexts/auth-form-context';
import { MenuCollapseContext } from '@/contexts/menu-collapse-context';
import { TableContext } from '@/contexts/table-context';
import { ThemeContext } from '@/contexts/theme-context';
import { FormContext } from '@/contexts/form-context';
import {
	IAuthFormContextProps,
	ICollapseProps,
	IErrorUseContext,
	IFormContext,
	ITableContext,
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

export function useFormContext(): IFormContext {
	const context = useContext(FormContext);
	throwError({ context, message: 'FormContext' });
	return context as IFormContext;
}

export function useTableContext(): ITableContext {
	const context = useContext(TableContext);
	throwError({ context, message: 'TableContext' });
	return context as ITableContext;
}
