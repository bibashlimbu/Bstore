import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function UpdateDataAccordion({
  title,
  titleValue,
  inputValue,
  inputFieldId,
  setInputValue,
  label,
  onClick,
  isPending,
}) {
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
        >
          <Typography
            variant="body1"
            sx={{ fontSize: { sm: "1rem", xs: "0.8rem" } }}
          >
            {title}: <b>{titleValue}</b>
          </Typography>
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <TextField
            id={inputFieldId}
            label={label}
            variant="standard"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isPending}
          />
          <Button
            variant="contained"
            onClick={onClick}
            disabled={isPending}
            sx={{ fontSize: { sm: "0.8rem", xs: "0.7rem" } }}
          >
            save changes
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default UpdateDataAccordion;
