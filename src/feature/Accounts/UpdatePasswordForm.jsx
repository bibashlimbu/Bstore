import { useState } from "react";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { updateUser, isPending } = useUpdateUser();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { errors } = formState;

  function onSubmit({ password }) {
    if (!password) return;
    console.log(password);
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap={"wrap"}
        gap={2}
      >
        <FormControl
          variant="filled"
          error={errors?.password?.message ? true : false}
        >
          <InputLabel htmlFor="filled-adornment-password">
            New pasword
          </InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? "text" : "password"}
            disabled={isPending}
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

        <FormControl
          variant="filled"
          error={errors?.password?.message ? true : false}
        >
          <InputLabel htmlFor="filled-adornment-password">
            Confirm password
          </InputLabel>
          <FilledInput
            id="passwordConfirm"
            type={showPassword ? "text" : "password"}
            disabled={isPending}
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
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "password need to match",
            })}
          />
          {errors?.passwordConfirm?.message && (
            <Typography
              variant="caption"
              sx={{ color: "error.main", mt: 1, textAlign: "left" }}
            >
              {errors?.passwordConfirm?.message}
            </Typography>
          )}
        </FormControl>
      </Stack>
      <Box mt={2}>
        <Button variant="contained" type="submit">
          Update Password
        </Button>
      </Box>
    </Box>
  );
}

export default UpdatePasswordForm;
