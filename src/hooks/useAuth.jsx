import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProviderComponents";

function useAuth() {
  const useAuth = useContext(AuthContext);

  return useAuth;
}
export default useAuth;
