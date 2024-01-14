import {
	getTheme,
	saveTheme,
} from '@/handlers/handle-session';
import { IThemeContext } from '@/types';
import {
	ReactNode,
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

const initialValue = {
	myTheme: 'dark',
	toggleMyTheme: () => {},
};

export const ThemeContext = createContext<
	IThemeContext | undefined
>(initialValue);

export const ThemeContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [myTheme, setTheme] = useState(
		getTheme() || 'dark',
	);

	const toggleMyTheme = () => {
		setTheme((prev) => {
			const newTheme = prev === 'dark' ? 'light' : 'dark';
			saveTheme(newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		if (myTheme === 'dark')
			document.documentElement.setAttribute(
				'data-theme',
				'dark',
			);
		else
			document.documentElement.removeAttribute(
				'data-theme',
			);
	}, [myTheme]);

	const value = useMemo(() => {
		return {
			myTheme,
			toggleMyTheme,
		};
	}, [myTheme]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};
