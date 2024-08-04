import { Box } from "@mui/material";
import { useGetUserOrders } from "./useGetUserOrders";
import OrderItem from "../orders/OrderItem";
import Spinner from "../../ui/Spinner";
import NotFound from "../../ui/NotFound";

function UserOrder() {
  const { orders, isLoading } = useGetUserOrders();

  if (isLoading) return <Spinner />;
  if (!orders.length)
    return (
      <NotFound src={"/no-order.svg"} alt={"No Order"} content={"Order"} />
    );

  return (
    <Box>
      {orders?.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </Box>
  );
}

export default UserOrder;
