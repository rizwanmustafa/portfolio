import ReactDOM from "react-dom";
import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading/Loading";
import "./index.css";

// Lazy load non-essential components
const App = lazy(() => import("./App"));
const ProjectList = lazy(() => import("./components/ProjectList/ProjectList"));

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" >
				<Route index element={<Suspense fallback={<Loading />}><App /></Suspense>} />

				<Route path="projects">
					<Route index element={<Suspense fallback={<Loading />}><ProjectList /></Suspense>} />

					<Route path="LocalPasswordManager" element={<div>Hello there</div>} />
				</Route>

			</Route>
		</Routes>
	</Router >,
	document.querySelector("#root")
);