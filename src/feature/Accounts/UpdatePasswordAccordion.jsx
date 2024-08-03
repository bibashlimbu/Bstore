import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UpdatePasswordForm from "./UpdatePasswordForm";

function UpdateDataAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };
  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary aria-controls="panel1-content" id="panel1-header">
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", width: "100%" }}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: { sm: "1rem", xs: "0.8rem" } }}
            >
              Password:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { sm: "1rem", xs: "0.8rem" } }}
            >
              The passwod is not shown for security reasons
            </Typography>
          </Box>
          {expanded ? (
            <Button
              variant="outlined"
              sx={{ fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
            >
              Close
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{ fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
            >
              Update
            </Button>
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <UpdatePasswordForm />
      </AccordionDetails>
    </Accordion>
  );
}

export default UpdateDataAccordion;
