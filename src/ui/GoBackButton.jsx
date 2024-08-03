import { KeyboardBackspace } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="go back"
      sx={{ color: "primary.main" }}
      size="medium"
      onClick={() => navigate(-1)}
    >
      <KeyboardBackspace fontSize="inherit" sx={{ color: "primary.main" }} />
    </IconButton>
  );
}

export default GoBackButton;
