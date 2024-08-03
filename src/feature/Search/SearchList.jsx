import { Grid, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import StyledContainer from "../../ui/Container";
import { useGetProducts } from "../Store/useGetProducts";
import Spinner from "../../ui/Spinner";
import SortByOperation from "../../ui/SortByOperation";
import CollectionItem from "../../ui/CollectionItem";
import RelatedProducts from "./RelatedProducts";
import NotFound from "../../ui/NotFound";
import TopSection from "../../ui/TopSection";

function SearchList() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Spinner />;

  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!searchedProducts.length)
    return (
      <NotFound
        src={"no-item-found.svg"}
        alt="no item found"
        content="product"
      />
    );

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
              fontWeight: 500,
              fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.4rem" },
            }}
          >
            Showing {searchedProducts.length}{" "}
            {searchedProducts.length === 1 ? "result" : "results"} for{" "}
            <b>"{query}"</b>
          </Typography>
          <SortByOperation />
        </Stack>
        <Grid container spacing={2}>
          {searchedProducts.map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </Grid>
      </StyledContainer>

      <RelatedProducts
        resultantProducts={searchedProducts}
        products={products}
      />
    </TopSection>
  );
}

export default SearchList;
