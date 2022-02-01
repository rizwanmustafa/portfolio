import { useState, useRef, useEffect, CSSProperties } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Squash as Hamburger } from "hamburger-react";
import MenuItem from "./MenuItem";
import { Stack } from "@mui/material";

import theme from "../../scripts/MUITheme";



const MobileMenu = (): JSX.Element => {
	const location = useLocation();
	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const menuElement = useRef<HTMLDivElement>(null);

	const mobileMenuStyles: CSSProperties = {
		position: "absolute",
		top: "275%",
		left: "50%",
		zIndex: 1,
		width: "85%",
		transform: "translate(-50%, -50%)",


		// padding: "1.5rem",
		borderRadius: 10,
		backgroundColor: "white",
		boxShadow: "1px 5px 20px -10px black",


		transition: "max-height 0.75s ease",
		padding: 0,
		maxHeight: 0,
		overflow: "hidden",

	}

	useEffect(() => {
		if (menuElement.current !== null) {
			console.log(menuElement.current);

			if (showMenu === true) {
				menuElement.current.style.maxHeight = menuElement.current.scrollHeight + "px";
			}
			else if (showMenu === false) {
				menuElement.current.style.maxHeight = "0px";
			}
		}

	}, [showMenu])

	return (
		<>
			<Hamburger
				color={theme.palette.primary.main}
				rounded
				label="Show Menu"
				onToggle={(toggled) => { setShowMenu(toggled) }}
			/>

			<Stack ref={menuElement} style={mobileMenuStyles} direction={"column"}>
				<MenuItem display="Home" route="/" navigate={navigate} location={location} style={{ margin: "1.5rem 1.5rem 0 1.5rem" }} />
				<MenuItem display="Projects" route="/projects" navigate={navigate} location={location} style={{ margin: "0 1.5rem" }} />
				<MenuItem display="Contact" route="/contact" navigate={navigate} location={location} style={{ margin: "0 1.5rem" }} />
				<MenuItem display="About" route="/about" navigate={navigate} location={location} style={{ margin: "0 1.5rem 1.5rem 1.5rem" }} />
			</Stack>
		</>
	);
}

export default MobileMenu;