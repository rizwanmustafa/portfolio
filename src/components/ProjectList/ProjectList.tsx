import ProjectCard from "./ProjectCard/ProjectCard";

// Import Material UI components
import { Typography } from "@mui/material";

const projects: Array<{ name: string, description: string, repoLink: string, type: string, technologies: string, liveURL?: string }> = [
	{
		name: "Rizpass",
		type: "CLI Desktop Application",
		technologies: "Python, MySQL",
		description: "A simple and opensource password manager that encrypts and stores your passwords in a local database. You can generate secure passwords and export and import credentials using a JSON file.",
		repoLink: "https://www.github.com/rizwanmustafa/Rizpass"
	},
	// Uncomment this once the Cloud Password Manager is complete
	// {
	// 	name: "Cloud Password Manager",
	// 	type: "Web Application",
	// 	technologies: "ReactJS, MaterialUI, Flask, Mongodb",
	// 	description: "Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",
	// 	repoLink: "https://www.github.com/rizwanmustafa/CloudPasswordManager"
	// },
	{
		name: "Test Type",
		type: "Web Application",
		technologies: "Vanilla Javascript, Flask (Python), MySQL",
		description: "Users can create accounts and practice their typing. Their weakest keys would be detected and they were made to type words starting with those keys in order for their typing skills to be improved.",
		repoLink: "https://github.com/rizwanmustafa/testtype"
	},
	{
		name: "Frontend Mentor Challenges",
		type: "Multiple Web Applications",
		technologies: "HTML, CSS, SASS, Vanilla JS and React",
		description: "A collection of the challenges I have solved for FrontendMentor.io. It was both fun and rewarding to solve these challenges. These challenges also provided me with valuable front-end designing experience.",
		repoLink: "https://github.com/rizwanmustafa/frontendmentor-challenges/",
		liveURL: "https://rizwanmustafa.github.io/frontendmentor-challenges/"
	},
	{
		name: "Sudoku Solver",
		type: "CLI Desktop Application",
		technologies: "C#, .NET Core",
		description: "This is a simple sudoku solver I made in C#. The goal of this project was to implement backtracking to speed up the process of finding a possible solution for the sudoku board if one existed.",
		repoLink: "https://github.com/rizwanmustafa/SudokuSolver"
	},
];

const ProjectList = (): JSX.Element => {

	return (
		<div id="projectList" style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			paddingBottom: 25,
			backgroundColor: "black",
		}}>
			<Typography variant="h2" component="h2" style={{ fontWeight: 500, marginTop: 25, marginBottom: 25 }}>Projects</Typography>
			<div className="projects" style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "center",
			}}>

				{projects.map((projectData, index) => {
					return (
						<ProjectCard
							key={index}
							name={projectData['name']}
							type={projectData['type']}
							technologies={projectData['technologies']}
							description={projectData['description']}
							repoLink={projectData['repoLink']}
							liveURL={projectData["liveURL"]}
						/>
					)
				})}

			</div>
		</div>
	)
}

export default ProjectList;