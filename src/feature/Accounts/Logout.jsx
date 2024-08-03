import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogout } from "./useLogout";
import { ClipLoader } from "react-spinners";

function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <Button
      variant="outlined"
      startIcon={<LogoutIcon />}
      onClick={logout}
      sx={{ fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
    >
      {isPending ? <ClipLoader size={"1rem"} /> : "Logout"}
    </Button>
  );
}

export default Logout;
