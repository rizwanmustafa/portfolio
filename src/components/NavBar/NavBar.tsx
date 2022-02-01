import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Stack } from "@mui/material";
import theme from "../../scripts/MUITheme";
import MobileMenu from "./MobileMenu";
import MenuItem from "./MenuItem";

import Logo from "../../images/Logos/Logo.svg";

const MenuBar = (): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();

	// Code for responsiveness
	const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

	const handleScreenSizeChange = useCallback(() => setIsDesktop(window.innerWidth > 768), []);

	useEffect(() => {
		window.addEventListener("resize", handleScreenSizeChange);
		return () => window.removeEventListener("resize", handleScreenSizeChange);
	})

	return (
		<Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} style={{
			padding: "0.5rem 1rem", borderBottom: `2px solid ${theme.palette.primary.main}`,
			position: "relative",
		}}>
			<img src={Logo} style={{ width: "6rem", cursor: "pointer" }} onClick={() => navigate("/")} alt="" />
			{isDesktop ?
				<Stack direction={"row"} spacing={3}>

					<MenuItem display={"Home"} route={"/"} location={location} navigate={navigate} />
					<MenuItem display={"Projects"} route={"/projects"} location={location} navigate={navigate} />
					<MenuItem display={"Contact"} route={"/contact"} location={location} navigate={navigate} />
					<MenuItem display={"About"} route={"/about"} location={location} navigate={navigate} />
				</Stack>
				:
				<MobileMenu />
			}
		</Stack >
	)
}

export default MenuBar;