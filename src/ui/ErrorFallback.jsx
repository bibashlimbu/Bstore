import styled from "@emotion/styled";
import TopSection from "./TopSection";
import StyledContainer from "./Container";
import { Button, Stack, Typography } from "@mui/material";

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
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <TopSection>
      <StyledContainer>
        <Stack alignItems="center" spacing={2}>
          <Image src="somethingWentWrong.svg" alt="somethingWentWrong" />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.8rem" },
            }}
          >
            !!! Something went wrong !!!
          </Typography>
          <Button variant="contained" onClick={resetErrorBoundary}>
            Goto Home
          </Button>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default ErrorFallback;
