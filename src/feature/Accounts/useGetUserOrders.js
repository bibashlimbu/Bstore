import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../Service/apiOrder";
import { useUser } from "./useUser";

export function useGetUserOrders() {
  const { user } = useUser();
  const currentUserEmail = user?.email;
  const { data: orders, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrders(currentUserEmail),
  });
  return { orders, isLoading };
}
