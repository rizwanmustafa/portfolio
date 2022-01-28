import styled from "styled-components";

import { Stack, Button } from "@mui/material";

import bgImage from "./bgImage.png";

import githubIcon from "../../images/Logos/Github.png";
import linkedInIcon from "../../images/Logos/LinkedIn.png";

const Introduction = (): JSX.Element => {
	/*
			  #overlayDiv {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			  
				color: rgba(255, 255, 255, 0.85);
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
			  }
			  
			  #overlayDiv h1::after {
				content: " ";
				background-color: rgba(46, 139, 87, 0.85);
				position: absolute;
				top: 100%;
				left: 0%;
				width: 100%;
				height: 5px;
			  }
			  
			  */
	const StyledHeading = styled.h1`
	::after {
		content: " ";
		background-color: rgb(46, 139, 87);
		position: absolute;
		top: 100%;
		left: 0%;
		width: 100%;
		height: 5px;
	  }
	`

	return (
		<div className="introduction" style={{
			position: "relative",
			height: 500
		}}>
			<img src={bgImage} alt="" style={{ width: "100vw", height: "100%", objectFit: "cover" }} />

			<div id="overlayDiv" style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
				color: 'white',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',

			}}>
				<StyledHeading style={{ marginBottom: 25, marginTop: 25, fontSize: "5rem", position: "relative" }}>Rizwan Mustafa</StyledHeading>

				<h3 style={{ marginBottom: 25, marginTop: 25, fontSize: "2.5rem" }}>Fullstack Web Developer</h3>

				<Stack
					direction="row"
					spacing={2}
				>
					<Button
						variant="contained"
						startIcon={<img src={githubIcon} style={{ width: 25 }} alt="" />}
						style={{ backgroundColor: "rgb(50,50,50)", textTransform: "none" }}
						target="_blank" rel="noopener" href="https://www.github.com/rizwanmustafa">
						Github Profile
					</Button>

					<Button
						variant="contained"
						startIcon={<img src={linkedInIcon} style={{ width: 25 }} alt="" />}
						style={{ backgroundColor: "#0077b7", textTransform: "none" }}
						target="_blank" rel="noopener" href="https://www.linkedin.com/in/rizwan-mustafa-khan">
						LinkedIn Profile
					</Button>
				</Stack>
			</div>

		</div >
	)
}

export default Introduction;