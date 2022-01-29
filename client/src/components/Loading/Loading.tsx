import { CSSProperties } from "react";
import { CircularProgress } from "@mui/material";

import colorScheme from "../../scripts/defaultColorScheme";

const Loading = (): JSX.Element => {
	const loadingStyles: CSSProperties = {
		position: "absolute",
		left: "50%",
		top: "50%",
		width: "100%",
		height: "100%",
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
				<CircularProgress size={"6rem"} style={{ color: colorScheme.main, }} />
				<p style={{ fontSize: "1.5rem", fontWeight: 300 }}>Loading content!</p>
			</div>
		</div>
	);
}

export default Loading;