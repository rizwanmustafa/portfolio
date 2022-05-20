import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./scripts/MUITheme";

import Loading from './components/Loading/Loading';

const Introduction = lazy(() => import("./components/Introduction/Introduction"));
const ProjectList = lazy(() => import("./components/ProjectList/ProjectList"));


const SiteUnderConstruction = (): JSX.Element => {
	return (
		<p style={{ backgroundColor: "red", margin: 0, padding: "0.5rem", color: "white", textAlign: "center" }}>Note: This website is under construction!</p>
	);
}

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Loading />} >
				<SiteUnderConstruction />
				<Introduction />
				<ProjectList />
			</Suspense>
		</ThemeProvider >
	);
}

export default App;
