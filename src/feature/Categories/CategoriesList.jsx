import { Grid, Typography } from "@mui/material";
import StyledContainer from "../../ui/Container";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../Store/useGetProducts";
import Spinner from "../../ui/Spinner";
import CollectionItem from "../../ui/CollectionItem";
import TopSection from "../../ui/TopSection";

function CategoriesList() {
  const { categoryName } = useParams();
  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Spinner />;

  const categoryItems = products.filter(
    (product) => product.category === categoryName
  );
  return (
    <TopSection>
      <StyledContainer>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            mb: 2,
          }}
        >
          Category : {categoryName}
        </Typography>
        <Grid container spacing={2}>
          {categoryItems.map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </Grid>
      </StyledContainer>
    </TopSection>
  );
}

export default CategoriesList;
