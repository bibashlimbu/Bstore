import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOption({ options, onChange, value }) {
  return (
    <FormControl variant="standard" sx={{ minWidth: { xs: 120, md: 160 } }}>
      <InputLabel id="demo-simple-select-standard-label">Sort By</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={onChange}
        label="Age"
        sx={{
          fontSize: { xs: "0.8rem", md: "1rem" },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
