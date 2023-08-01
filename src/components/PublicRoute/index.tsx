import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: Props) => {
  const { signed, isLoading } = useAuth();

  if (isLoading) return <p>{`Carregando`}</p>;

  if (signed) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
