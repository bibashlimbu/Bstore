import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../Service/apiOrder";
import { useParams } from "react-router-dom";

export function UseGetOrder() {
  const { customerId } = useParams();
  const { data: orders, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrder(customerId),
  });

  return { orders, isLoading };
}
