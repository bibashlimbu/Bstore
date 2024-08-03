import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createOrderAndCustomer as createOrderAndCustomerApi } from "../../Service/apiOrderCustomer";

export function useCreateOrderAndCustomer() {
  const queryClient = useQueryClient();
  const { mutate: createOrderAndCustomer, isPending } = useMutation({
    mutationFn: ({ data, orders }) => createOrderAndCustomerApi(data, orders),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      toast.success("Order received successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { createOrderAndCustomer, isPending };
}
