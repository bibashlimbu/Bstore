import { Container } from "@mui/material";
function StyledContainer({ children }) {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, sm: 10 } }}>
      {children}
    </Container>
  );
}

export default StyledContainer;
