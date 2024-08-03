import { useNavigate } from "react-router-dom";
import StyledContainer from "./Container";
import Swipper from "./Swipper";
import { Box, Button, Stack, Typography } from "@mui/material";
import TopSection from "./TopSection";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <TopSection bgcolor={"secondary.main"}>
      <StyledContainer>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 4, sm: 2, md: 4 }}
          justifyContent="space-between"
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              width: { xs: "100%", sm: "50%", md: "50%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Find the perfect product for you
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.8remrem", sm: "1rem", md: "1.1rem" },
                color: "text.secondary",
                mb: 3,
              }}
            >
              Discover our curated collection of high-quality products designed
              to enhance your lifestyle
            </Typography>
            <Box component="div">
              <Button variant="contained" onClick={() => navigate("/store")}>
                Shop Now
              </Button>
            </Box>
          </Box>
          <Swipper />
        </Stack>
      </StyledContainer>
    </TopSection>
  );
}

export default HeroSection;
