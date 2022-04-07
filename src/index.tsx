import ReactDOM from "react-dom";
import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./scripts/MUITheme";

import Loading from "./components/Loading/Loading";
import NavBar from "./components/NavBar/NavBar";

import "./index.css";

// Import firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize firebase
const firebaseConfig = {
	appId: process.env.REACT_APP_APP_ID,
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	measurementID: process.env.REACT_APP_MEASUREMENT_ID
}
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Lazy load non-essential components
const App = lazy(() => import("./App"));
const ProjectList = lazy(() => import("./components/ProjectList/ProjectList"));
const Code404 = lazy(() => import("./components/Code404/Code404"));

const SiteUnderConstruction = (): JSX.Element => {

	return (
		<p style={{ backgroundColor: "red", margin: 0, padding: "0.5rem", color: "white", textAlign: "center" }}>Note: This website is under construction!</p>
	);
}

ReactDOM.render(
	<Router>

		<ThemeProvider theme={theme}>
			<SiteUnderConstruction />
			<NavBar />

			<Routes>
				<Route path="/" >
					<Route index element={<Suspense fallback={<Loading />}><App /></Suspense>} />
					<Route path="projects">
						<Route index element={<Suspense fallback={<Loading />}><ProjectList /></Suspense>} />
					</Route>

					<Route path="contact" element={
						<div style={{ margin: "2rem 0.5rem" }}>
							<iframe title="Contact Rizwan Mustafa" src="https://docs.google.com/forms/d/e/1FAIpQLSdYmkY7zuLzzBPjoPMYH4Uo873GWDfV_UC-auL_2ZN602i4CQ/viewform?embedded=true" width="100%" height="875" frameBorder="0" >Loading…</iframe>
						</div>
					} />

					<Route path="*" element={<Suspense fallback={<Loading />}><Code404 /></Suspense>} /> {/* TODO: Create a 404 component later */}
				</Route>

			</Routes>

		</ThemeProvider>

	</Router >,
	document.querySelector("#root")
);