// Import material ui components
import { Typography, Paper } from "@mui/material";
import { JSX } from "react";

interface ProjectCardProps {
	name: string;
	description: string;
	type: string;
	technologies: string[];
	repoLink?: string;
	liveURL?: string;
}

interface TechCardProps {
	name: string;
}

const techCardStyles: React.CSSProperties = {
	padding: "5px 10px",
	borderRadius: "15px",
	backgroundColor: "#05a24f",
	alignSelf: "center",
};

function TechnologyCard(props: TechCardProps): JSX.Element {
	return (
		<div style={techCardStyles}>
			{props.name}
		</div>
	)
}


const ProjectCard = (props: ProjectCardProps): JSX.Element => {

	const displaySourceCodeLink: boolean = props.repoLink !== undefined && props.repoLink !== null;
	const displayLiveURLLink: boolean = props.liveURL !== undefined && props.liveURL !== null;
	const displayLinks = displaySourceCodeLink || displayLiveURLLink;

	return (
		<Paper elevation={3} className="projectCard" style={{
			width:"90%",
			maxWidth: "30rem",
			margin: "1rem",
			padding: "1.5rem",
			borderRadius: 10,
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "column",
			alignSelf: "baseline" // TODO: Change this to stretch and fix any problems
		}}>
			<Typography style={{ fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }} variant="h4" component="h2">{props.name}</Typography>
			<Typography style={{ marginBottom: "0.3rem" }}><b>Type:</b>  {props.type}</Typography>
			<div style={{ display: "flex", gap: "0.25rem", flexWrap:"wrap" }}>
				{props.technologies.map(t => <TechnologyCard name={t} key={t} />)}
			</div>
			{
				displayLinks &&
				<Typography style={{ marginBottom: "0.3rem", }}>
					<b>Links: </b>
					{displaySourceCodeLink &&
						<a target="_blank" rel="noreferrer" href={props.repoLink} >Source Code</a>}

					{(displayLiveURLLink && displaySourceCodeLink) && <span> | </span>}

					{displayLiveURLLink &&
						<a target="_blank" rel="noreferrer" href={props.liveURL} >Live Website</a>}

				</Typography>
			}

			<Typography style={{ marginTop: 8 }}>{props.description}</Typography>
		</Paper>
	)
}

export default ProjectCard;