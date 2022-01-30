import { useNavigate } from "react-router-dom";

import Introduction from "./components/Introduction/Introduction";

// Remove later
import { Button } from "@mui/material";
const App = (): JSX.Element => {
	const navigate = useNavigate();
	return (
		<>
			<Introduction />
			<Button variant="contained" onClick={() => navigate('/projects')} >Redirect to Project Page</Button>
		</>
	);
}

export default App;