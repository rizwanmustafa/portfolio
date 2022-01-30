import ReactDOM from "react-dom";
import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./scripts/MUITheme";

import Loading from "./components/Loading/Loading";
import NavBar from "./components/NavBar/NavBar";

import "./index.css";

// Lazy load non-essential components
const App = lazy(() => import("./App"));
const ProjectList = lazy(() => import("./components/ProjectList/ProjectList"));

ReactDOM.render(

	<Router>
		<ThemeProvider theme={theme}>
			<NavBar />
			<Routes>
				<Route path="/" >
					<Route index element={<Suspense fallback={<Loading />}><App /></Suspense>} />

					<Route path="projects">
						<Route index element={<Suspense fallback={<Loading />}><ProjectList /></Suspense>} />

						<Route path="LocalPasswordManager" element={<div>Hello there</div>} />
					</Route>

				</Route>
			</Routes>
		</ThemeProvider>
	</Router >,
	document.querySelector("#root")
);