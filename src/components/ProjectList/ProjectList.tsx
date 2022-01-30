import ProjectCard from "../ProjectCard/ProjectCard";

// Import Material UI components
import { Typography } from "@mui/material";
import theme from "../../scripts/MUITheme";

const ProjectList = (): JSX.Element => {
	const projects: Array<{ name: string, description: string, repoLink: string, type: string, technologies: string }> = [
		{
			name: "Local Password Manager",
			type: "Desktop Application",
			technologies: "Python, MySQL",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",
			repoLink: "https://www.github.com/rizwanmustafa/localpassman"
		},
		{
			name: "Cloud Password Manager",
			type: "Web Application",
			technologies: "ReactJS, MaterialUI, Flask, Mongodb",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",
			repoLink: "https://www.github.com/rizwanmustafa/CloudPasswordManager"
		},
		{
			name: "Local Password Manager",
			type: "Desktop Application",
			technologies: "Python, MySQL",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",
			repoLink: "https://www.github.com/rizwanmustafa/localpassman"
		},
		{
			name: "Cloud Password Manager",
			type: "Web Application",
			technologies: "ReactJS, MaterialUI, Flask, Mongodb",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",
			repoLink: "https://www.github.com/rizwanmustafa/CloudPasswordManager"
		},
		{
			name: "Local Password Manager",
			type: "Desktop Application",
			technologies: "Python, MySQL",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",
			repoLink: "https://www.github.com/rizwanmustafa/localpassman"
		},
		{
			name: "Cloud Password Manager",
			type: "Web Application",
			technologies: "ReactJS, MaterialUI, Flask, Mongodb",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",
			repoLink: "https://www.github.com/rizwanmustafa/CloudPasswordManager"
		},
	];

	return (
		<div className="projectList" style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			paddingBottom: 25,
			borderTop: `2px solid ${theme.palette.primary.main}`,
			borderBottom: `2px solid ${theme.palette.primary.main}`,
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
						/>
					)
				})}

			</div>
		</div>
	)
}

export default ProjectList;