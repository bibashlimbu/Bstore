import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Divider, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getCurrentQuantityById } from "../feature/Cart/cartSlice";
import { HUNDRED_PERCENT } from "../utils/constant";

import DeleteItem from "../feature/Cart/DeleteItem";
import UpdateCartQuantity from "../feature/Cart/UpdateCartQuantity";

function CollectionItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    id: productId,
    name,
    sellingPrice,
    description,
    image,
    markedPrice,
  } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(productId));
  const isInCart = currentQuantity > 0;

  const discountedPercent = Math.round(
    (sellingPrice / markedPrice) * 100 - HUNDRED_PERCENT
  );

  function handleAddToCart() {
    const newProduct = {
      id: productId,
      name,
      image,
      unitPrice: sellingPrice,
      quantity: 1,
      totalPrice: sellingPrice * 1,
    };
    dispatch(addProduct(newProduct));
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ p: 1 }} variant="outlined">
          <CardActionArea
            sx={{ minHeight: 400 }}
            onClick={() => navigate(`/product/${productId}`)}
          >
            <CardMedia
              component="img"
              height="250"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: { xs: "1.1rem", md: "1.5rem" } }}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    mt: 1,
                    fontWeight: 700,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {formatCurrency(sellingPrice)}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    mt: 1,
                    fontWeight: 500,
                    textDecoration: "line-through",
                    color: "text.secondary",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {formatCurrency(markedPrice)}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    mt: 1,
                    fontWeight: 500,
                    color: "primary.main",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {discountedPercent}%
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {isInCart && (
              <Stack direction="row" gap={2}>
                <UpdateCartQuantity
                  productId={productId}
                  currentQuantity={currentQuantity}
                />
                <DeleteItem productId={productId} />
              </Stack>
            )}
            {!isInCart && (
              <Button onClick={handleAddToCart} variant="contained">
                Add to cart
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
      <Divider />
    </>
  );
}

export default CollectionItem;
