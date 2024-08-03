import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../Service/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      navigate("/account");
      toast.success(
        "Account created successfully! verify with your email address"
      );
    },
  });
  return { signup, isPending };
}
