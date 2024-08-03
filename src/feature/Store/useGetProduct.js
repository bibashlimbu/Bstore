import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../Service/apiProducts";
import { useParams } from "react-router-dom";

export function useGetProduct() {
  const { ProductId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", ProductId],
    queryFn: () => getProduct(ProductId),
    retry: false,
  });

  return { product, isLoading, error };
}
