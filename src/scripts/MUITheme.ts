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

export default theme;