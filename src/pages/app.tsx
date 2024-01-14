import { MenuCollapseProvider } from '@/contexts/menu-collapse-context';
import { ThemeContextProvider } from '@/contexts/theme-context';
import QueryProviders from '@/lib/react-query/query-providers';
import Routes from '@/routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<QueryProviders>
					<MenuCollapseProvider>
						<Routes />
					</MenuCollapseProvider>
				</QueryProviders>
			</ThemeContextProvider>
		</BrowserRouter>
	);
};

export default App;
