import { Navigate } from "react-router-dom";
import { Fallback } from "../../pages/Fallback";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { signed, isLoading } = useAuth();
  if (isLoading) return <Fallback />;

  if (!signed) return <Navigate to="/" replace />;

  return children;
};
