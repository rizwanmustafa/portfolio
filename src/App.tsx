import { lazy, Suspense, JSX } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./scripts/MUITheme";

import Loading from './components/Loading/Loading';

const Introduction = lazy(() => import("./components/Introduction/Introduction"));
const ProjectList = lazy(() => import("./components/ProjectList/ProjectList"));


const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Loading />} >
				<Introduction />
				<ProjectList />
			</Suspense>
		</ThemeProvider >
	);
}

export default App;
