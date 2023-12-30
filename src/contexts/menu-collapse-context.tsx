import { useToggle } from '@/hooks/use-toggle';
import { ICollapseProps } from '@/types';
import React, { createContext, useMemo } from 'react';

export const MenuCollapseContext = createContext<
	ICollapseProps | undefined
>(undefined);

export const MenuCollapseProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [collapse, toggleCollapse] = useToggle(false);
	const value = useMemo(() => {
		return {
			collapse,
			toggleCollapse,
		};
	}, [collapse, toggleCollapse]);

	return (
		<MenuCollapseContext.Provider value={value}>
			{children}
		</MenuCollapseContext.Provider>
	);
};
