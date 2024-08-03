import styled from "@emotion/styled";
import { useUser } from "../feature/Accounts/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1 load the user
  const { isLoading, isAuthenticated } = useUser();

  //2 if there is no authenticated user redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/account");
  }, [isAuthenticated, isLoading, navigate]);

  //3 while Loading show the spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4 if  there is user show the children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
