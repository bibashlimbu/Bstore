import { Box, Stack, Typography } from "@mui/material";
import { formatCurrency } from "../../utils/helper";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function OrderItem({ item }) {
  const { name, image, unitPrice, quantity, totalPrice } = item;
  return (
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
        <Box sx={{ width: { sm: "260px", xs: "130px" } }}>
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
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        sx={{ fontSize: { sm: "1.2rem", xs: "0.8rem" }, fontWeight: 600 }}
      >
        {formatCurrency(totalPrice)}
      </Typography>
    </Stack>
  );
}

export default OrderItem;
