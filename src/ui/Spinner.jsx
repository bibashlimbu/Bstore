import { Box } from "@mui/material";
import { RingLoader } from "react-spinners";

function Spinner() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RingLoader color="rgb(225, 29, 71)" size={80} speedMultiplier={2} />
    </Box>
  );
}

export default Spinner;
