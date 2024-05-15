import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import logo from "../.././public/logo_2.png";
function Login() {
  const { googleSignIn, loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // handle login user
  const handleLoginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        // jwt token generator
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            {
              email: res?.user?.email,
            },
            { withCredentials: true }
          ).then(res)
          
        

        
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Password or email not matched!",
          icon: "error",
        });
      });
  };

  //   handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // jwt token generator
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            {
              email: res?.user?.email,
            },
            { withCredentials: true }
          )
          .then((res));
        

        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Password or Email did not matchl!",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 dark:bg-gray-900 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 w-full xl:w-5/12 p-6 sm:p-12">
            <div className="mt-0 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold dark:text-gray-200">
                Login
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-[#ff813211] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4 dark:text-gray-200">
                      Sign Up with Google
                    </span>
                  </button>
                </div>

                <div className="my-4 border-b text-center">
                  <div className="leading-none px-2 dark:text-gray-200 dark:bg-gray-900 inline-block text-sm text-gray-600  tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or login up with e-mail
                  </div>
                </div>

                <form
                  onSubmit={handleLoginUser}
                  className="mx-auto mt-8 dark:bg-gray-900 max-w-xs"
                >
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                  />
                  <div className="relative">
                    <input
                      className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      id="password"
                      placeholder="Password"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-8 cursor-pointer"
                    >
                      {showPassword ? (
                        <>
                          <IoIosEye size={24} />
                        </>
                      ) : (
                        <>
                          <IoIosEyeOff size={24} />
                        </>
                      )}
                    </div>
                  </div>
                  <button className="mt-5 tracking-wide font-semibold bg-[#FF7F32] text-gray-100 w-full py-3 rounded-lg hover:bg-[#ff8132d2] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                </form>
                <p className="mt-6 text-xs dark:text-gray-300 text-gray-600 text-center">
                  <span>Don’t you have an account? </span>
                  <Link
                    className="font-medium hover:text-[#FF1C6A]"
                    to={"/signUp"}
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 bg-[url('https://cdn.pixabay.com/photo/2016/04/18/16/22/gradient-1336854_640.jpg')] bg-cover text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full rounded-md backdrop-blur-sm bg-white/30 bg-contain bg-center bg-no-repeat">
              <div className="flex flex-col w-full h-full justify-center items-center">
                <img className="w-20" src={logo} alt="" />
                <h1 className="text-4xl font-bold py-3">Back to Alternify</h1>
                <h3 className=" font-semibold text-gray-700 py-2 w-8/12">
                  Keep track of your contributions and connect with a community
                  passionate about making a difference. Log in to your account!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
