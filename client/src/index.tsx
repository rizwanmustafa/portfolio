import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" >
				<Route index element={<App />} />

				<Route path="projects">
					<Route index element={<div>Hello</div>} />

					<Route path="LocalPasswordManager" element={<div>Hello there</div>} />
				</Route>

			</Route>
		</Routes>
	</Router>,
	document.querySelector("#root")
);