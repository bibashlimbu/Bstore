import { useState } from "react";
import TopSection from "../../ui/TopSection";
import StyledContainer from "../../ui/Container";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useLogin } from "./useLogin";
import { ClipLoader } from "react-spinners";
import PasswordField from "../../ui/PasswordField";
import SignUpInLink from "./SignUpInLink";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <TopSection>
      <StyledContainer>
        <Stack
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            sx={{ textAlign: "center", maxWidth: { sm: "400px", xs: "300px" } }}
            mt={10}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              WELCOME BACK
            </Typography>
            <Typography variant="body2" my={3}>
              Sign in to access an enhanced shopping experience.
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" },
              }}
              noValidate
              autoComplete="on"
              onSubmit={handleSubmit}
            >
              <TextField
                label="email"
                type="email"
                variant="filled"
                sx={{ mb: 1 }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
              />
              <PasswordField
                password={password}
                setPassword={setPassword}
                isLoading={isLoading}
                label={"password"}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isLoading}
                sx={{ mt: 3 }}
              >
                {!isLoading ? "Login" : <ClipLoader />}
              </Button>
              <SignUpInLink
                content="Not a member?"
                to="/account/signup"
                linkName="Join us"
              />
            </Box>
          </Box>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default LoginForm;
