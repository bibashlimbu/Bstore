import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../Service/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/account/info", { replace: true });
    },
    onError: (error) => {
      toast.error(
        error.message === "Invalid login credentials"
          ? "Invalid email or password"
          : error.message
      );
      console.log(error);
    },
  });

  return { login, isLoading };
}
