import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "18ch",
        outline: "0.5px solid #fff",
      },
    },
  },
}));

function SearchQuery({ display }) {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (query.length < 3) return;

    searchParams.set("q", query);
    setSearchParams(searchParams);
    navigate(`/search?q=${query}`, { replace: true });

    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Search sx={{ display: { xs: `${display}`, md: "flex" } }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "common.white" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ color: "common.white" }}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </Search>
    </form>
  );
}

export default SearchQuery;
