import { MenuCollapseContext } from '@/contexts/menu-collapse-context';
import { ICollapseProps, IErrorUseContext } from '@/types';
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

export function useMenuCollapseContext(): ICollapseProps {
	const context = useContext(MenuCollapseContext);
	throwError({ context, message: 'MenuCollapseContext' });
	return context as ICollapseProps;
}
