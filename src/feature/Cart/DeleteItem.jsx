import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProduct } from "./cartSlice";
import { toast } from "react-toastify";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteProduct(productId));
    toast.success("Product removed from cart");
  }

  return (
    <Button
      variant="outlined"
      sx={{ fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
      onClick={handleDelete}
    >
      Remove
    </Button>
  );
}

export default DeleteItem;
