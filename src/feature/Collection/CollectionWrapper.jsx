import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useGetProducts } from "../Store/useGetProducts";
import { Box, Grid, Stack, Typography } from "@mui/material";
import StyledContainer from "../../ui/Container";
import CollectionItem from "../../ui/CollectionItem";
import GoBackButton from "../../ui/GoBackButton";

function CollectionWrapper() {
  const { collectionName } = useParams();
  const { products, isLoading } = useGetProducts();

  const collectionItems = products?.filter(
    (product) => product.collection === collectionName
  );

  if (isLoading) return <Spinner />;
  return (
    <Box component="section">
      <StyledContainer>
        <Stack direction="row" alignItems="center" spacing={2}>
          <GoBackButton />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2,
            }}
          >
            {collectionName}
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {collectionItems.map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
}

export default CollectionWrapper;
