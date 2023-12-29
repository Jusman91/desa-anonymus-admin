export interface TokenTheme {
	colorError: string;
	fontSize: number;
	borderRadius: number;
	colorPrimary: string;
	colorInfo: string;
}

export interface Themes {
	token: TokenTheme;
	algorithm: string;
}

export const themes: Themes = {
	token: {
		colorError: '#f52629',
		fontSize: 16,
		borderRadius: 12,
		colorPrimary: '#094a58',
		colorInfo: '#094a58',
	},
	algorithm: 'Dark',
};
