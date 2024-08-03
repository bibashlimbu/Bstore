import StyledContainer from "../../ui/Container";
import TopSection from "../../ui/TopSection";
import { Button, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Image = styled.img`
  width: 40%;
  height: auto;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 65%;
  }
`;

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <TopSection>
      <StyledContainer>
        <Stack alignItems="center" spacing={2}>
          <Image src="empty-cart.svg" alt="empty-cart" />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.8rem" },
            }}
          >
            !!! No item in cart !!!
          </Typography>
          <Button variant="contained" onClick={() => navigate("/store")}>
            Goto Store
          </Button>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default EmptyCart;
