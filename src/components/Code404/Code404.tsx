import Typography from "@mui/material/Typography";

const Code404 = (): JSX.Element => {
  console.log("We are here")
  return (
    <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
      <Typography component={"h1"} variant={"h3"} color="primary" style={{ fontWeight: 500 }}>404 - Resource not Found</Typography>
    </div>
  );
}

export default Code404;