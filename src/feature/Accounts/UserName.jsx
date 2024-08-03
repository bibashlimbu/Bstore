import { Stack, Typography } from "@mui/material";

function UserName({ user }) {
  const { fullName, email } = user.user_metadata;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ flexWrap: "wrap" }}
      mb={2}
    >
      <Typography variant="body1">
        Hello, <b>{fullName}</b>
      </Typography>
      <Typography>Signed in as: {email}</Typography>
    </Stack>
  );
}

export default UserName;
