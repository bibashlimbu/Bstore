import { useSearchParams } from "react-router-dom";
import SelectOption from "./SelectOption";

function SortByOperation() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <SelectOption
      options={[
        { value: "sellingPrice-asc", label: "Price: Low to High" },
        { value: "sellingPrice-desc", label: "Price: High to Low" },
      ]}
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortByOperation;
