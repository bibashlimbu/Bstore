import { Button, Grid, Stack, Typography } from "@mui/material";
import { formatCurrency } from "../../utils/helper";
import ProductInfo from "./ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getCurrentQuantityById } from "../Cart/cartSlice";
import { HUNDRED_PERCENT } from "../../utils/constant";
import styled from "@emotion/styled";
import UpdateCartQuantity from "../Cart/UpdateCartQuantity";
import DeleteItem from "../Cart/DeleteItem";

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const {
    id: productId,
    name,
    sellingPrice,
    markedPrice,
    image,
    description,
    material,
    rating,
    origin,
    brand,
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
    <Grid container sx={{ backgroundColor: "secondary.main" }} p={3}>
      <Grid item sm={12} md={7}>
        <Image src={image} alt={name} />
      </Grid>

      <Grid item sm={12} md={5} sx={{ pl: { xs: 0, sm: 3 } }}>
        <Stack direction={"column"} sx={{ mt: { md: 0, sm: 2 } }} gap={3}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { sm: "1.5rem", md: "1.7rem" },
              color: "primary.main",
            }}
          >
            {name}
          </Typography>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              {formatCurrency(sellingPrice)}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                textDecoration: "line-through",
                color: "text.secondary",
              }}
            >
              {formatCurrency(markedPrice)}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                color: "primary.main",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              {discountedPercent}%
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <ProductInfo
            brand={brand}
            material={material}
            rating={rating}
            origin={origin}
          />
          <Grid item>
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
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
