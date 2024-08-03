import { Box } from "@mui/material";

function TopSection({ children, bgcolor }) {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: bgcolor, mt: { xs: 5, sm: 0 } }}
    >
      {children}
    </Box>
  );
}

export default TopSection;
