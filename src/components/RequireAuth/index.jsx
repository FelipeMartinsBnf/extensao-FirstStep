// src/components/RequireAuth.jsx
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

export default function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Carregando...</p>;
  if (!user) return <Navigate to="/login" />;

  return children;
}
