// Imports from React
import { useNavigate } from "react-router-dom";

// Module Related imports
import colorScheme from "../../scripts/defaultColorScheme";

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
	// TODO: Design for mobile
	const navigate = useNavigate();

	const embeddedLinkStyles: CSSProperties = {
		color: "black",
	}

	const displaySourceCodeLink: boolean = props.repoLink !== undefined && props.repoLink !== null;
	const displayLiveURLLink: boolean = props.liveURL !== undefined && props.liveURL !== null;
	const displayLinks = displaySourceCodeLink || displayLiveURLLink;

	return (
		<Paper elevation={3} className="projectCard" style={{
			width: 500,
			margin: 20,
			padding: 30,
			borderRadius: 10,
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "column"
		}}>
			<Typography style={{ fontWeight: "bold", marginBottom: 10, }} variant="h4" component="h2">{props.name}</Typography>
			<Typography style={{ marginBottom: 3 }}><b>Type:</b>  {props.type}</Typography>
			<Typography style={{ marginBottom: 3 }}><b>Technologies Used:</b>  {props.technologies}</Typography>
			{
				displayLinks &&
				<Typography style={{ marginBottom: 3, }}>
					<b>Links: </b>
					{displaySourceCodeLink &&
						<a target="_blank" rel="noopener" href={props.repoLink} style={embeddedLinkStyles}>Source Code</a>}

					{(displayLiveURLLink && displaySourceCodeLink) && <span> | </span>}

					{displayLiveURLLink &&
						<a target="_blank" rel="noopener" href={props.liveURL} style={embeddedLinkStyles}>Live Demonstration</a>}

				</Typography>
			}

			<Typography style={{ marginTop: 8 }}>{props.description}</Typography>

			<Button
				variant="contained"
				style={{ backgroundColor: colorScheme.main, alignSelf: "center", marginTop: 20, }}
				onClick={() => navigate(`/projects/${props.name.replace(/\s/g, "")}`)}
			>

				Learn More
			</Button>

		</Paper>
	)
}

export default ProjectCard;