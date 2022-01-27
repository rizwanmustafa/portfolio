import { CSSProperties } from "react";
import { CircularProgress } from "@mui/material";

import colorScheme from "../defaultColorScheme";

const Loading = (): JSX.Element => {
	const loadingStyles: CSSProperties = {
		position: "absolute",
		left: "50%",
		top: "50%",
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.7)",
		color: "white",
		transform: "translate(-50%, -50%)",
		zIndex: 3,

	}

	const flexStyles: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	}
	return (
		<div className="loading" style={{ ...loadingStyles, ...flexStyles }}>
			<div style={flexStyles} >
				<CircularProgress size={75} style={{ color: colorScheme.main, }} />
				<p>Loading content!</p>
			</div>
		</div>
	);
}

export default Loading;