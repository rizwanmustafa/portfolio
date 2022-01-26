// Import components
import ProjectCard from "./components/ProjectCard/ProjectCard";

const App = (): JSX.Element => {
	return (
		<ProjectCard
			name="Local Password Manager"
			repoLink="https://www.github.com/rizwanmustafa/localpassman"
			liveURL="https://www.google.com/"
			description="Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database"
			detailLink="/projects/LocalPasswordManager"
		/>
	);
}

export default App;