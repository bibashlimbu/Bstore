import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "primary.main", p: 2 }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          sx={{
            justifyContent: {
              xs: "space-evenly",
              sm: "space-between",
              md: "space-between",
            },
          }}
        >
          <Logo />
          <Typography sx={{ color: "common.white" }}>
            © 2024 Bstore. All right reserved
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ color: "common.white", fontWeight: 600 }}>
              Tech Stack
            </Typography>
            <FaReact color="white" size="1.5rem" />
            <SiRedux color="white" size="1.5rem" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
