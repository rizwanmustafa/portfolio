
import { CSSProperties } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";

// Import Material UI components
import { Typography } from "@mui/material";

const ProjectList = (): JSX.Element => {
	//TODO: Fetch these from the server
	const projects: Array<{ name: string, description: string, repoLink: string }> = [
		{
			name: "Local Password Manager",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",
			repoLink: "https://www.github.com/rizwanmustafa/localpassman"
		},
		{
			name: "Cloud Password Manager",
			description: "Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",
			repoLink: "https://www.github.com/rizwanmustafa/CloudPasswordManager"
		}
	];

	// TODO: Add styles so that the two projects appear side by side on a desktop screen
	// TODO: Add mobile design for the project list where only one project appears width wise
	const projectListStyles: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	};

	return (
		<div className="projectList" style={projectListStyles}>
			<Typography variant="h2" component="h2" style={{ fontWeight: 500, marginBottom: 25 }}>Projects</Typography>
			<div className="projects" style={{ }}>

				{projects.map((projectData, index) => {
					return (
						<ProjectCard
							key={index}
							name={projectData['name']}
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