import { Box, Button, Stack, Typography } from "@mui/material";
import StyledContainer from "./Container";
import Grid from "@mui/material/Grid";
import CollectionItem from "./CollectionItem";
import { useNavigate } from "react-router-dom";

function CollectionList({ collection, collectionName }) {
  const navigate = useNavigate();
  const words = collectionName.split(" ");
  const convertedCollectionName =
    words[0].toLowerCase() +
    words[1].charAt(0).toUpperCase() +
    words[1].slice(1).toLowerCase();

  return (
    <Box component="section">
      <StyledContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          {" "}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            {collectionName}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate(`/collection/${convertedCollectionName}`)}
          >
            view All
          </Button>
        </Stack>

        <Grid container spacing={2}>
          {collection.map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
}

export default CollectionList;
