import { Grid, Stack, Typography } from "@mui/material";
import StyledContainer from "../../ui/Container";
import { useGetProducts } from "./useGetProducts";
import CollectionItem from "../../ui/CollectionItem";
import Spinner from "../../ui/Spinner";
import SortByOperation from "../../ui/SortByOperation";
import TopSection from "../../ui/TopSection";

function AllProducts() {
  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Spinner />;
  return (
    <TopSection>
      <StyledContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            All products
          </Typography>
          <SortByOperation />
        </Stack>

        <Grid container spacing={2}>
          {products.map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </Grid>
      </StyledContainer>
    </TopSection>
  );
}

export default AllProducts;
