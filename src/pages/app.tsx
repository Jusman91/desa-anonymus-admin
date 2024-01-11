import { MenuCollapseProvider } from '@/contexts/menu-collapse-context';
import QueryProviders from '@/lib/react-query/query-providers';
import Routes from '@/routes';
import { ConfigProvider, theme } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorError: '#f52629',
					fontSize: 14,
					borderRadius: 12,
					colorPrimary: '#094a58',
					colorInfo: '#094a58',
					colorBgBase: '#0B1215',
				},
				components: {
					Menu: {
						itemSelectedBg: '#D2EEF4',
					},
					Table: {
						fontSize: 12,
					},
				},
				algorithm: theme.darkAlgorithm,
			}}>
			<QueryProviders>
				<MenuCollapseProvider>
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</MenuCollapseProvider>
			</QueryProviders>
		</ConfigProvider>
	);
};

export default App;
