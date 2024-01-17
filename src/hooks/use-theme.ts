import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
import { useThemeContext } from './use-context';

export function useTheme() {
	const { myTheme } = useThemeContext();
	const { darkAlgorithm, defaultAlgorithm } = theme;
	const rootTheme: ThemeConfig = {
		token: {
			colorError: '#f52629',
			fontSize: 14,
			borderRadius: 12,
			colorPrimary: '#094a58',
			colorInfo: '#094a58',
			colorBgBase:
				myTheme === 'dark' ? '#0B1215' : undefined,
			colorLinkActive: '#06677f',
			colorLinkHover: '#038d9f',
		},

		components: {
			Menu: {
				itemSelectedBg: '#D2EEF4',
			},
			Table: {
				fontSize: 12,
			},
			Input: {
				activeShadow: undefined,
			},
		},
		algorithm:
			myTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
	};

	const authTheme: ThemeConfig = {
		token: {
			colorBgBase: '#192930',
			colorError: '#f52629',
			fontSize: 14,
			borderRadius: 12,
			colorPrimary: '#094a58',
		},
		components: {
			Input: {
				colorBgContainer: '#fff',
				colorTextPlaceholder: '#6b6b6b',
			},
			Form: {
				labelColor: '#fff',
			},
		},
	};

	return { rootTheme, authTheme };
}
