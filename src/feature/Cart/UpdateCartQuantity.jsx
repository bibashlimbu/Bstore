import { Fab, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "./cartSlice";

function UpdateCartQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        variant="extended"
        onClick={() => dispatch(decreaseProductQuantity(productId))}
      >
        <RemoveIcon />
      </Fab>
      <Typography
        variant="h6"
        sx={{ fontSize: { sm: "1.2rem", xs: "0.8rem" } }}
      >
        {currentQuantity}
      </Typography>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        variant="extended"
        onClick={() => dispatch(increaseProductQuantity(productId))}
      >
        <AddIcon />
      </Fab>
    </Stack>
  );
}

export default UpdateCartQuantity;
