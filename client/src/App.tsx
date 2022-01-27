// Import components
import ProjectCard from "./components/ProjectCard/ProjectCard";

import { useNavigate } from "react-router-dom";

// Remove later
import { Button } from "@mui/material";
const App = (): JSX.Element => {
	const navigate = useNavigate();
	return (
		<>
			<p>Currently Working on the Projects Page!</p>
			<Button variant="contained" onClick={() => navigate('/projects')} >Redirect to Project Page</Button>
		</>
	);
}

export default App;