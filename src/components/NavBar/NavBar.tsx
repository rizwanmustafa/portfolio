import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Stack, Button } from "@mui/material";
import theme from "../../scripts/MUITheme";

import { Squash as Hamburger } from "hamburger-react";
import Logo from "../../images/Logos/Logo.svg";

const MenuBar = (): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();

	// Code for responsiveness
	const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

	const handleScreenSizeChange = useCallback(() => {
		setIsDesktop(window.innerWidth > 768);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleScreenSizeChange);

		return () => {
			window.removeEventListener("resize", handleScreenSizeChange);
		}
	})
	return (
		<Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} style={{ margin: "0.5rem 1rem" }}>
			<img src={Logo} style={{ width: "6rem", cursor: "pointer" }} onClick={() => navigate("/")} alt="" />
			{isDesktop ?
				<Stack direction={"row"} spacing={3}>
					<Button variant={location.pathname === "/" ? "outlined" : "text"}
						onClick={() => navigate("/")}>
						Home
					</Button>
					<Button variant={location.pathname === "/projects" ? "outlined" : "text"}
						onClick={() => navigate("/projects")}>
						Projects
					</Button>
					<Button variant={location.pathname === "/contact" ? "outlined" : "text"}
						onClick={() => navigate("/contact")}>
						Contact
					</Button>
					<Button variant={location.pathname === "/about" ? "outlined" : "text"}
						onClick={() => navigate("/about")}>
						About
					</Button>
				</Stack>
				:
				<Hamburger
					color={theme.palette.primary.main}
					rounded
					label="Show Menu"
					onToggle={(toggled) => console.log(`Hamburger was toggled: ${toggled}`)}
				/>
			}
		</Stack >
	)
}

export default MenuBar;