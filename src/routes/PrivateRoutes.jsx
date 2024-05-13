import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { lineWobble } from "ldrs";
lineWobble.register();
function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <l-line-wobble
          size="80"
          stroke="5"
          bg-opacity="0.1"
          speed="1.75"
          color="orange"
        ></l-line-wobble>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
}

export default PrivateRoutes;

// Default values shown
