import { CSSProperties } from "react";
import { Location, NavigateFunction } from "react-router-dom";

import { Button } from "@mui/material";

interface Props {
	display: string;
	route: string;
	location: Location;
	navigate: NavigateFunction;
	style?: CSSProperties;
}

const MenuItem = (props: Props): JSX.Element => {
	return (
		<Button
			variant={props.location.pathname === props.route ? "outlined" : "text"}
			onClick={() => props.navigate(props.route)}
			style={props.style}
		>
			{props.display}
		</Button>
	)
};

export default MenuItem;