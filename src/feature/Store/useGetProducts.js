import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../Service/apiProducts";

export function useGetProducts() {
  // sorting
  const [searchParams] = useSearchParams();
  const sortByRaw = searchParams.get("sortBy") || "sellingPrice-asc";

  const [field, direction] = sortByRaw?.split("-");
  const sortBy = { field, direction };

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", sortBy],
    queryFn: () => getProducts({ sortBy }),
  });

  return { products, isLoading, error };
}
