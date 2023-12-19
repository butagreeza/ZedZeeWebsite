import { createContext, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const tokens = {
	primary: {
		main: '#B50101',
		darker: '#127c85',
		lighter: '#38c2cb',
	},
	secondary: {
		complementary: '#a61945',
		darker: '#801732',
		lighter: '#c6405d',
	},
	background: {
		default: '#f2f2f2',
		alternate: '#f2f2f2',
	},
	text: {
		primary: '#333333',
		secondary: '#666666',
		light: '#999999',
		accent: '#19a6b0',
	},
	button: {
		primaryBg: '#19a6b0',
		primaryText: '#ffffff',
		secondaryBg: '#ffffff',
		secondaryText: '#19a6b0',
	},
	link: {
		color: '#19a6b0',
		visited: '#801732',
	},
	borders: '#cccccc',
	dividers: '#e5e5e5',
	alert: {
		success: '#23c02e',
		warning: '#f0ad4e',
		error: '#d9534f',
		info: '#5bc0de',
	},
};

export const themeSettings = () => {
	const colors = tokens;

	return {
		palette: {
			mode: 'light',
			primary: {
				main: colors.primary.main,
			},
			secondary: {
				main: colors.secondary.complementary,
			},
			neutral: {
				dark: colors.text.primary,
				main: colors.text.secondary,
				light: colors.text.light,
			},
			background: {
				default: colors.background.default,
			},
		},
		typography: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 12,
			h1: {
				fontFamily: ['Montserrat', 'sans-serif'].join(','),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Montserrat', 'sans-serif'].join(','),
				fontSize: 32,
			},
			h3: {
				fontFamily: ['Montserrat', 'sans-serif'].join(','),
				fontSize: 24,
			},
			h4: {
				fontFamily: ['Montserrat', 'sans-serif'].join(','),
				fontSize: 20,
			},
			h5: {
				fontFamily: ['Montserrat', 'sans-serif'].join(','),
				fontSize: 16,
			},
			h6: {
				fontFamily: ['Montserrat', 'sans-serif'].join(','),
				fontSize: 14,
			},
		},
	};
};

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const theme = useMemo(() => createTheme(themeSettings()), []);
	return [theme];
};
