import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: '#54d47d',
			main: '#05a24f',
			dark: '#007224',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#4792f4',
			dark: '#0065c1',
			contrastText: '#fff',
		},
	},
});

export const linkedInTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: '#56a6ea',
			main: '#0077b7',
			dark: '#004c87',
			contrastText: '#fff',
		},
	}
});

export const githubTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: "#5c5c5c",
			main: "#333333",
			dark: "#1f1f1f",
			contrastText: "#fff",
		}
	}
});

export default theme;