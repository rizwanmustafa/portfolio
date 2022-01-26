import { useNavigate } from "react-router-dom";

import colorScheme from "../defaultColorScheme";

// Import material ui components
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

// For the sake of typescript
import { CSSProperties } from "react";


interface Props {
	name: string;
	description: string;
	detailLink: string;
	repoLink?: string;
	liveURL?: string;
}

const ProjectCard = (props: Props): JSX.Element => {
	const navigate = useNavigate();

	const embeddedLinkStyles: CSSProperties = {
		color: "black",
	}

	return (
		<div className="projectCard" style={{
			width: 500,
			border: "1px solid " + colorScheme.main,
			margin: 20,
			padding: 30,
			borderRadius: 10,
			display: "flex",
			flexDirection: "column"
		}}>
			<Typography style={{ fontWeight: "bold", marginBottom: 10, }} variant="h4" component="h2">{props.name}</Typography>
			{
				(props.repoLink !== undefined && props.repoLink !== null) &&
				(<Typography style={{ marginBottom: 3, }}>
					<span style={{ fontWeight: "bold" }}>Source Code: </span>
					<a target="_blank" rel="noreferrer" href={props.repoLink} style={embeddedLinkStyles}>{props.repoLink}</a>
				</Typography>)
			}
			{
				(props.liveURL !== undefined && props.liveURL !== null) &&
				(<Typography style={{ marginBottom: 3, }}>
					<span style={{ fontWeight: "bold" }}>Live URL: </span>
					<a target="_blank" rel="noreferrer" href={props.liveURL} style={embeddedLinkStyles}>{props.liveURL}</a>
				</Typography>)
			}

			<Typography style={{ marginTop: 8 }}>{props.description}</Typography>

			<Button
				variant="contained"
				style={{ backgroundColor: colorScheme.main, alignSelf: "center", marginTop: 20, }}
				onClick={() => navigate(`/projects/${props.name.replace(/\s/g, "")}`)}
			>

				Learn More
			</Button>

		</div>
	)
}

export default ProjectCard;