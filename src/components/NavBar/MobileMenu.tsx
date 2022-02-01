import { useState, CSSProperties } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Squash as Hamburger } from "hamburger-react";
import MenuItem from "./MenuItem";
import { Stack } from "@mui/material";

import theme from "../../scripts/MUITheme";



const MobileMenu = (): JSX.Element => {
	const location = useLocation();
	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState<boolean>(false);

	const mobileMenuStyles: CSSProperties = {
		position: "absolute",
		top: "11rem",
		left: "50%",
		zIndex: 1,
		width: "85%",
		transform: "translate(-50%, -50%)",


		padding: "1.5rem",
		borderRadius: 10,
		backgroundColor: "white",
		boxShadow: "1px 5px 20px -10px black",

	}

	return (
		<>
			<Hamburger
				color={theme.palette.primary.main}
				rounded
				label="Show Menu"
				onToggle={(toggled) => { setShowMenu(toggled) }}
			/>

			{showMenu &&
				<Stack style={mobileMenuStyles} direction={"column"}>
					<MenuItem display="Home" route="/" navigate={navigate} location={location} />
					<MenuItem display="Projects" route="/projects" navigate={navigate} location={location} />
					<MenuItem display="Contact" route="/contact" navigate={navigate} location={location} />
					<MenuItem display="About" route="/about" navigate={navigate} location={location} />
				</Stack>
			}
		</>
	);
}

export default MobileMenu;