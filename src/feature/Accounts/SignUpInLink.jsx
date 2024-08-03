import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SignupLink({ content, to, linkName }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={2}
      gap={1}
    >
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        {content}
      </Typography>
      <Typography
        variant="body2"
        to={to}
        component={Link}
        sx={{
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        {linkName}
      </Typography>
    </Stack>
  );
}

export default SignupLink;
