import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function CategoriesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = ({ categoryName }) => {
    navigate(`/categories/${categoryName}`);
    setAnchorEl(null);
  };

  const categories = ["Clothing", "Accessories", "Audio", "Furniture"];

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
        sx={{
          color: "common.white",
          textTransform: "capitalize",
          fontWeight: 600,
        }}
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((categoryName) => (
          <MenuItem
            key={categoryName}
            onClick={() => handleClick({ categoryName })}
          >
            {categoryName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
