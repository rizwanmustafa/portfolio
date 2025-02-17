import { JSX, useCallback, useState, useEffect } from "react";
import { Stack, Button } from "@mui/material";

// Import icons from material ui
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

import githubIcon from "../../images/Logos/Github.png";
import linkedInIcon from "../../images/Logos/LinkedIn.png";

import { githubTheme, linkedInTheme } from "../../scripts/MUITheme";
import { ThemeProvider } from "@mui/material/styles";


// Actual component
const Introduction = (): JSX.Element => {

	// Code for responsiveness
	const [flexDirection, setFlexDirection] = useState<"column" | "row">(window.innerWidth < 768 ? "column" : "row");

	const handleScreenSizeChange = useCallback(() => {
		if (window.innerWidth < 768)
			setFlexDirection("column")
		else
			setFlexDirection("row")
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleScreenSizeChange);
		return () => {
			window.removeEventListener("resize", handleScreenSizeChange);
		}
	});


	const buttonWidth: string = "12rem";

	return (
		<div className="introduction" style={{
			position: "relative",
			height: "40rem",
		}}>

			<div className="overlayDiv">
				<h1 className="name" style={{ marginBottom: 25, marginTop: 25, fontSize: "5rem", position: "relative" }}>Rizwan Mustafa</h1>

				<h3 style={{ marginBottom: 25, marginTop: 25, fontSize: "2.5rem" }}>Fullstack Web Developer</h3>

				<Stack spacing={"1rem"}>

					<Stack
						direction={flexDirection}
						spacing={"0.75rem"}
					>
						<ThemeProvider theme={githubTheme}>
							<Button
								variant="contained"
								startIcon={<img src={githubIcon} style={{ width: 25 }} alt="" />}
								endIcon={<LaunchRoundedIcon fontSize="small" />}
								style={{ textTransform: "none", width: buttonWidth, }}
								target="_blank" rel="noreferrer" href="https://www.github.com/rizwanmustafa">
								Github Profile
							</Button>
						</ThemeProvider>

						<ThemeProvider theme={linkedInTheme}>
							<Button
								variant="contained"
								startIcon={<img src={linkedInIcon} style={{ width: 25 }} alt="" />}
								endIcon={<LaunchRoundedIcon fontSize="small" />}
								style={{ textTransform: "none", width: buttonWidth }}
								target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rizwan-mustafa-khan">
								LinkedIn Profile
							</Button>
						</ThemeProvider>
					</Stack>


					<Stack
						direction={flexDirection}
						spacing={"0.75rem"}
					>
						<Button
							variant="contained"
							startIcon={<LightbulbRoundedIcon />}
							style={{ textTransform: "none", width: buttonWidth }}
							onClick={() => { document.querySelector("#projectList")?.scrollIntoView({ behavior: "smooth" }) }}
						>
							Projects
						</Button>
						<Button
							variant="outlined"
							startIcon={<ArticleRoundedIcon />}
							endIcon={<LaunchRoundedIcon fontSize="small" />}
							style={{ textTransform: "none", width: buttonWidth }}
							target="_blank" rel="noreferrer"
							href="https://docs.google.com/document/d/1WORXz694L42Zg3jcgGLXJOsStmTmWyTtG5ZoLyqK3kk/edit?usp=sharing"
						>
							Resume
						</Button>
					</Stack>

				</Stack>
			</div>

		</div >
	)
}

export default Introduction;