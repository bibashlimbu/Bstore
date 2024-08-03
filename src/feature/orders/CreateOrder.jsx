import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import StyledContainer from "../../ui/Container";
import TopSection from "../../ui/TopSection";
import GoBackButton from "../../ui/GoBackButton";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { clearCart, getCart } from "../Cart/cartSlice";
import EmptyCart from "../Cart/EmptyCart";
import { useCreateOrderAndCustomer } from "./useCreateOrderAndCustomer";
import store from "../../utils/store";

function CreateOrder() {
  const navigate = useNavigate();
  const { handleSubmit, register, reset, formState } = useForm();
  const { createOrderAndCustomer, isPending } = useCreateOrderAndCustomer();
  const orders = useSelector(getCart);

  const { errors } = formState;

  const onSubmit = (data) => {
    createOrderAndCustomer(
      { data, orders },
      {
        onSuccess: (data) => {
          store.dispatch(clearCart());
          navigate(`/order/${data[0].id}`);

          reset();
        },
      }
    );
  };

  if (!orders.length) return <EmptyCart />;
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
            <Stack direction="row" alignItems="center" gap={2} mb={2}>
              <GoBackButton />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                Ready to order? let's go
              </Typography>
            </Stack>

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
                disabled={isPending}
              />
              <TextField
                label="Address"
                type="text"
                variant="filled"
                sx={{ mb: 1 }}
                id="address"
                {...register("address", {
                  required: "This field is required",
                })}
                error={errors?.address?.message ? true : false}
                helperText={errors?.address?.message}
                disabled={isPending}
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
                disabled={isPending}
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
                disabled={isPending}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3 }}
                disabled={isPending}
              >
                {isPending ? "Ordering..." : " Order now"}
              </Button>
            </Box>
          </Box>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default CreateOrder;
