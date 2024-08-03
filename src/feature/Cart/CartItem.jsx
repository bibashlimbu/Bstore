import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { formatCurrency } from "../../utils/helper";
import DeleteItem from "./DeleteItem";
import UpdateCartQuantity from "./UpdateCartQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function CartItem({ item }) {
  const { id: productId, name, image, unitPrice, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(productId));
  return (
    <>
      <Stack
        direction="row"
        my={2}
        flexWrap="wrap"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: { sm: "center", xs: "space-between" } }}
        >
          <Box sx={{ width: { sm: "260px", xs: "160px" } }}>
            <Image src={image} alt={name} />
          </Box>
          <Stack
            direction="column"
            sx={{ rowGap: { sm: "0.7rem", xs: "0.2rem" } }}
          >
            <Typography variant="h6" fontSize={{ sm: "1.5rem", xs: "1rem" }}>
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { sm: "1.2rem", xs: "0.8rem" } }}
            >
              Price: {formatCurrency(unitPrice)}
            </Typography>
            <Typography variant="body2">Qty: {quantity}</Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { sm: "1.2rem", xs: "0.8rem" } }}
            >
              Total: {formatCurrency(totalPrice)}
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <UpdateCartQuantity
            productId={productId}
            currentQuantity={currentQuantity}
          />
        </Box>
        <Box>
          <DeleteItem productId={productId} />
        </Box>
      </Stack>
      <Divider />
    </>
  );
}

export default CartItem;
