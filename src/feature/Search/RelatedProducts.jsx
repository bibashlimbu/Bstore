import { Box, Divider, Grid, Typography } from "@mui/material";
import StyledContainer from "../../ui/Container";
import CollectionItem from "../../ui/CollectionItem";

function RelatedProducts({ resultantProducts, products }) {
  //related products
  const resultantCategoryItems = products?.filter((product) =>
    resultantProducts?.some(
      (searchedProduct) => searchedProduct.category === product.category
    )
  );

  const relatedProducts = resultantCategoryItems?.filter(
    (searchedCategoryItem) =>
      !resultantProducts.some(
        (searchedProduct) => searchedProduct.id === searchedCategoryItem.id
      )
  );
  return (
    <>
      {relatedProducts?.length > 0 && (
        <>
          <Divider />
          <Box component="section">
            <StyledContainer>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                  mb: 2,
                }}
              >
                Related Products
              </Typography>
              <Grid container spacing={2}>
                {relatedProducts.map((product) => (
                  <CollectionItem key={product.id} product={product} />
                ))}
              </Grid>
            </StyledContainer>
          </Box>
        </>
      )}
    </>
  );
}

export default RelatedProducts;
