import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../Service/apiAuth";
import { toast } from "react-toastify";

export function useUpdateUser() {
  const queryClent = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("user updated successfully");
      queryClent.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { updateUser, isPending };
}
