import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

function useAxiosSecure() {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      console.log("error from axios inte", err.response);
      if (err.response.status === 401 || err.response.status === 403) {
        console.log("unauthorized people");
        await logoutUser();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
}

export default useAxiosSecure;
