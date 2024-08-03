import StyledContainer from "../../ui/Container";
import TopSection from "../../ui/TopSection";
import { UseGetOrder } from "./useGetOrder";
import Spinner from "../../ui/Spinner";
import OrderItem from "./OrderItem";
import { Box, Divider, Typography } from "@mui/material";
import { formatCurrency } from "../../utils/helper";

function OrderDetails() {
  const { orders, isLoading } = UseGetOrder();

  if (isLoading) return <Spinner />;

  if (!orders.length) return null;

  const productsPrice = orders?.reduce(
    (sum, order) => sum + order.totalPrice,
    0
  );

  const shippingPrice = orders?.reduce(
    (sum, order) => sum + order.totalPrice * order.shippingPercent,
    0
  );

  return (
    <TopSection>
      <StyledContainer>
        <Typography
          variant="h5"
          sx={{ fontSize: { sm: "1.4rem", xs: "1rem" }, fontWeight: 600 }}
        >
          Order Details
        </Typography>
        {orders?.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
        <Divider />
        <Box mt={2} sx={{ backgroundColor: "primary.main", p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { sm: "1.2rem", xs: "0.9rem" },
              fontWeight: 500,
              color: "common.white",
            }}
          >
            Product price: {formatCurrency(productsPrice)}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { sm: "1.2rem", xs: "0.9rem" },
              fontWeight: 500,
              color: "common.white",
            }}
          >
            Shipping price: {formatCurrency(shippingPrice)}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { sm: "1.4rem", xs: "1rem" },
              fontWeight: 600,
              color: "common.white",
            }}
          >
            To pay on delivery: {formatCurrency(shippingPrice + productsPrice)}
          </Typography>
        </Box>
      </StyledContainer>
    </TopSection>
  );
}

export default OrderDetails;
