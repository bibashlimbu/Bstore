import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import StyledContainer from "../../ui/Container";
import TopSection from "../../ui/TopSection";
import SignUpInLink from "./SignUpInLink";
import { useSignup } from "./useSignup";

function SignUpForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { signup, isPending } = useSignup();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { errors } = formState;

  function onSubmit({ fullName, phone, email, password }) {
    signup({ fullName, phone, email, password }, { onSettled: () => reset() });
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
              BECOME A BSTORE MEMBER
            </Typography>
            <Typography variant="body2" my={3}>
              Create your Medusa Store Member profile, and get access to an
              enhanced shopping experience.
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" },
              }}
              noValidate
              autoComplete="on"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                label="Full name"
                type="text"
                variant="filled"
                sx={{ mb: 1 }}
                id="fullName"
                {...register("fullName", {
                  required: "This field is required",
                })}
                error={errors?.fullName?.message ? true : false}
                helperText={errors?.fullName?.message}
              />

              <TextField
                label="Phone"
                type="number"
                variant="filled"
                sx={{ mb: 1 }}
                id="phone"
                {...register("phone", {
                  required: "This field is required",
                })}
                error={errors?.phone?.message ? true : false}
                helperText={errors?.phone?.message}
              />
              <TextField
                label="Email"
                type="email"
                variant="filled"
                sx={{ mb: 1 }}
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                error={errors?.email?.message ? true : false}
                helperText={errors?.email?.message}
              />

              <FormControl
                variant="filled"
                error={errors?.password?.message ? true : false}
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "minimum 8 characters",
                    },
                  })}
                />
                {errors?.password?.message && (
                  <Typography
                    variant="caption"
                    sx={{ color: "error.main", mt: 1, textAlign: "left" }}
                  >
                    {errors?.password?.message}
                  </Typography>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3 }}
                disabled={isPending}
              >
                Join us
              </Button>

              <SignUpInLink
                content="Already have an account?"
                to="/account"
                linkName="Sign in"
              />
            </Box>
          </Box>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default SignUpForm;
