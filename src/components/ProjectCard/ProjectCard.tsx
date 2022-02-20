// Imports from React
import { useNavigate } from "react-router-dom";

// Import material ui components
import { Typography, Button, Paper } from "@mui/material";

// For the sake of typescript
import { CSSProperties } from "react";


interface Props {
	name: string;
	description: string;
	type: string;
	technologies: string;
	repoLink?: string;
	liveURL?: string;
}

const ProjectCard = (props: Props): JSX.Element => {
	const navigate = useNavigate();

	const embeddedLinkStyles: CSSProperties = {
		color: "black",
	}

	const displaySourceCodeLink: boolean = props.repoLink !== undefined && props.repoLink !== null;
	const displayLiveURLLink: boolean = props.liveURL !== undefined && props.liveURL !== null;
	const displayLinks = displaySourceCodeLink || displayLiveURLLink;

	return (
		<Paper elevation={3} className="projectCard" style={{
			maxWidth: "30rem",
			margin: "1rem",
			padding: "1.5rem",
			borderRadius: 10,
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "column"
		}}>
			<Typography style={{ fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }} variant="h4" component="h2">{props.name}</Typography>
			<Typography style={{ marginBottom: "0.3rem" }}><b>Type:</b>  {props.type}</Typography>
			<Typography style={{ marginBottom: "0.3rem" }}><b>Technologies Used:</b>  {props.technologies}</Typography>
			{
				displayLinks &&
				<Typography style={{ marginBottom: "0.3rem", }}>
					<b>Links: </b>
					{displaySourceCodeLink &&
						<a target="_blank" rel="noreferrer" href={props.repoLink} style={embeddedLinkStyles}>Source Code</a>}

					{(displayLiveURLLink && displaySourceCodeLink) && <span> | </span>}

					{displayLiveURLLink &&
						<a target="_blank" rel="noreferrer" href={props.liveURL} style={embeddedLinkStyles}>Live Demonstration</a>}

				</Typography>
			}

			<Typography style={{ marginTop: 8 }}>{props.description}</Typography>
		</Paper>
	)
}

export default ProjectCard;