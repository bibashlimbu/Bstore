import { Button, Divider, Stack, Typography } from "@mui/material";
import StyledContainer from "../../ui/Container";
import TopSection from "../../ui/TopSection";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import { formatCurrency } from "../../utils/helper";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function CartOverview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;
  return (
    <TopSection>
      <StyledContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          mb={2}
          alignItems="center"
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { sm: "1.2rem", md: "1.2rem", xs: "1rem" } }}
          >
            Already have an account?
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/account")}
            sx={{ fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
          >
            Sign in
          </Button>
        </Stack>
        <Divider />
        <Stack direction={"row"} justifyContent="space-between" mt={2}>
          <Typography
            variant="h5"
            sx={{ fontSize: { sm: "1.4rem", xs: "1rem" }, fontWeight: 600 }}
          >
            {" "}
            {totalQuantity} {totalQuantity > 1 ? "items" : "item"}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { sm: "1.4rem", xs: "1rem" }, fontWeight: 600 }}
          >
            Total: {formatCurrency(totalPrice)}
          </Typography>
        </Stack>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="contained"
            sx={{ mt: 2, fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 2, fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
            onClick={() => navigate("/order")}
          >
            Order Product
          </Button>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default CartOverview;
