import { useToggle } from '@/hooks/use-toggle';
import { ITableContext } from '@/types';
import {
	ReactNode,
	createContext,
	useMemo,
	useState,
} from 'react';

export const TableContext = createContext<
	ITableContext | undefined
>(undefined);

export const TableContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [idDelete, setIdDelete] = useState('');
	const [open, setOpen] = useToggle(false);

	const valueContext = useMemo(() => {
		return {
			idDelete,
			setIdDelete,
			open,
			setOpen,
		};
	}, [idDelete, open, setOpen]);

	return (
		<TableContext.Provider value={valueContext}>
			{children}
		</TableContext.Provider>
	);
};
