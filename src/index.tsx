import ReactDOM from "react-dom";
import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./scripts/MUITheme";

import Loading from "./components/Loading/Loading";
import NavBar from "./components/NavBar/NavBar";

import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
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