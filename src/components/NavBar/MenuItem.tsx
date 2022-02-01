import { Location, NavigateFunction } from "react-router-dom";

import { Button } from "@mui/material";

interface Props {
	display: string;
	route: string;
	location: Location;
	navigate: NavigateFunction;
}

const MenuItem = (props: Props): JSX.Element => {
	return (
		<Button
			variant={props.location.pathname === props.route ? "outlined" : "text"}
			onClick={() => props.navigate(props.route)}
		>
			{props.display}
		</Button>
	)
};

export default MenuItem;