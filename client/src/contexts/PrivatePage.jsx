// PrivatePage.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivatePage = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivatePage;