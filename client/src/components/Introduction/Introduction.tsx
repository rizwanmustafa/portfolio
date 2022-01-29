import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Stack, Button } from "@mui/material";

import bgImage from "./bgImage.png";

import githubIcon from "../../images/Logos/Github.png";
import linkedInIcon from "../../images/Logos/LinkedIn.png";

// Custom styled components
const OverlayDiv = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const StyledHeading = styled.h1`
	::after {
		content: " ";
		background-color: rgb(46, 139, 87);
		position: absolute;
		top: 100%;
		left: 0%;
		width: 100%;
		height: 0.3rem;
	}
`

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



	return (
		<div className="introduction" style={{
			position: "relative",
			height: "40rem",
		}}>
			<img src={bgImage} alt="" style={{ width: "100vw", height: "100%", objectFit: "cover" }} />

			<OverlayDiv>
				<StyledHeading style={{ marginBottom: 25, marginTop: 25, fontSize: "5rem", position: "relative" }}>Rizwan Mustafa</StyledHeading>

				<h3 style={{ marginBottom: 25, marginTop: 25, fontSize: "2.5rem" }}>Fullstack Web Developer</h3>

				<Stack
					direction={flexDirection}
					spacing={2}
				>
					<Button
						variant="contained"
						startIcon={<img src={githubIcon} style={{ width: 25 }} alt="" />}
						style={{ backgroundColor: "rgb(50,50,50)", textTransform: "none" }}
						target="_blank" rel="noreferrer" href="https://www.github.com/rizwanmustafa">
						Github Profile
					</Button>

					<Button
						variant="contained"
						startIcon={<img src={linkedInIcon} style={{ width: 25 }} alt="" />}
						style={{ backgroundColor: "#0077b7", textTransform: "none" }}
						target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rizwan-mustafa-khan">
						LinkedIn Profile
					</Button>
				</Stack>
			</OverlayDiv>

		</div >
	)
}

export default Introduction;