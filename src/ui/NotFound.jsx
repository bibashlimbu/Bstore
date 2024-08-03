import { Button, Stack, Typography } from "@mui/material";
import StyledContainer from "./Container";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import TopSection from "./TopSection";

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

function NotFound({ src, alt, content }) {
  const navigate = useNavigate();
  return (
    <TopSection>
      <StyledContainer>
        <Stack alignItems="center" spacing={2}>
          <Image src={src} alt={alt} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.8rem" },
            }}
          >
            !!! No {content} found !!!
          </Typography>
          <Button variant="contained" onClick={() => navigate("/")}>
            Goto Home
          </Button>
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default NotFound;
