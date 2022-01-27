// Import components
import ProjectCard from "./components/ProjectCard/ProjectCard";

import { useNavigate } from "react-router-dom";

const App = (): JSX.Element => {
	const navigate = useNavigate();
	return (
		<>
			<ProjectCard
				name="Local Password Manager"
				repoLink="https://www.github.com/rizwanmustafa/localpassman"
				liveURL="https://www.google.com/"
				description="Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database"
			/>
			<button onClick={() => navigate('/projects')} >Redirect to Project Page</button>
		</>
	);
}

export default App;