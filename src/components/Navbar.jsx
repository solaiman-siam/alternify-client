import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import logo from "../.././public/logo_2.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Avatar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
function Navbar() {
  const { user, logoutUser } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const [isOpen, setOpen] = useState(false);

  // logout user
  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        console.log("logout successful");
        localStorage.removeItem("email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full relative max-w-7xl px-4 dark:bg-gray-900 mx-auto  h-20  ">
      <div className="flex justify-between lg:px-6  h-full items-center ">
        <Link to="/" className="flex justify-center items-center ">
          <img className="w-[40px]" src={logo} alt="" />
          <h3 className="lg:text-3xl text-[26px]  dark:text-white font-bold">
            Alternify
          </h3>
        </Link>
        <ul className="lg:flex gap-5 hidden ">
          <NavLink
            to="/"
            className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF7F32]"
          >
            Home
          </NavLink>

          <NavLink
            className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF7F32]"
            to="/queries"
          >
            Queries
          </NavLink>
          <NavLink
            to="/donations"
            className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF7F32]"
          >
            Donations
          </NavLink>
          <NavLink
            to="/about-us"
            className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF7F32]"
          >
            About Us
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/my-queries"
                className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF7F32]"
              >
                My Queries
              </NavLink>

              <Dropdown
                label={"Recommendations"}
                className=""
                arrowIcon={true}
                inline
              >
                <Dropdown.Item>
                  <NavLink
                    className="btn btn-sm   border-none shadow-none hover:text-[#FF7F32]"
                    to={"/my-recommendations"}
                  >
                    My Recommendations
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    className="btn btn-sm   border-none shadow-none hover:text-[#FF7F32]"
                    to={"/recommendations-for-me"}
                  >
                    Recommendations For Me
                  </NavLink>
                </Dropdown.Item>
              </Dropdown>
            </>
          )}
        </ul>
        <div className="flex gap gap-2 ">
          <button onClick={handleTheme} className="h-12 w-12 rounded-lg p-2">
            {darkMode ? (
              <svg
                className="fill-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg
                className="fill-orange-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          <div className="lg:flex  items-center justify-center gap-4">
            {user && (
              <>
                <div className="w-11 h-fit border-[3px] rounded-full border-[#ff813246]">
                  <Dropdown
                    label={<Avatar img={user?.photoURL} alt="User" rounded />}
                    arrowIcon={false}
                    inline
                  >
                    <Dropdown.Header className="">
                      <span className="block text-sm">{user?.displayName}</span>
                      <span className="block truncate text-sm font-medium">
                        {user?.email}
                      </span>
                    </Dropdown.Header>
                  </Dropdown>
                </div>
                <button
                  onClick={handleSignOut}
                  type="button"
                  className="text-white lg:flex hidden bg-[#FF7F32] mt-2 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md  text-sm px-3 py-1.5 text-center  me-2 mb-2"
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <Link
                to={"/login"}
                className="text-white bg-[#FF7F32] mt-2 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md  text-sm px-3 py-1.5 text-center  me-2 mb-2"
              >
                Login
              </Link>
            )}
          </div>
          <div className="lg:hidden dark:text-white">
            <Hamburger
              color={darkMode ? "white" : "black"}
              toggled={isOpen}
              toggle={setOpen}
              size={26}
            />
          </div>
        </div>
      </div>

      {/* sidebar menu */}
      <div
        className={
          isOpen
            ? "bg-orange-100 dark:bg-gray-900 left-0 top-0 lg:hidden md:hidden absolute transition-all duration-300 pt-10  h-screen  px-14  z-10 "
            : "bg-orange-100  absolute top-0 md:hidden lg:hidden  -left-96 transtion-all duration-300   px-20 pt-10 z-10 h-screen"
        }
      >
        <div>
          <Link to="/" className="flex justify-center items-center ">
            <img className="w-[40px]" src={logo} alt="" />
            <h3 className="text-3xl dark:text-white font-bold">Alternify</h3>
          </Link>
        </div>
        <ul className="flex-col flex space-y-4  pt-10">
          <NavLink
            to="/"
            className="hover:text-[#FF7F32] dark:text-white font-semibold hover:link-hover"
          >
            Home
          </NavLink>
          <NavLink
            to={"/queries"}
            className="hover:text-[#FF7F32] dark:text-white font-semibold hover:link-hover"
          >
            Queries
          </NavLink>
          <NavLink
            to={"/donations"}
            className="hover:text-[#FF7F32] dark:text-white font-semibold hover:link-hover"
          >
            Donation
          </NavLink>
          <NavLink
            to={"/about-us"}
            className="hover:text-[#FF7F32] dark:text-white font-semibold hover:link-hover"
          >
            About Us
          </NavLink>
          <NavLink
            to={"my-queries"}
            className="hover:text-[#FF7F32] dark:text-white font-semibold hover:link-hover"
          >
            My Queries
          </NavLink>
          <Dropdown
            label={"Recommendations"}
            className="font-bold dark:text-white"
            arrowIcon={true}
            inline
          >
            <Dropdown.Item>
              <NavLink
                className="btn btn-sm font-semibold   border-none shadow-none hover:text-[#FF7F32] dark:text-white"
                to={"/my-recommendations"}
              >
                My Recommendations
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                className="btn btn-sm   border-none shadow-none hover:text-[#FF7F32] dark:text-white"
                to={"/recommendations-for-me"}
              >
                Recommendations For Me
              </NavLink>
            </Dropdown.Item>
          </Dropdown>
        </ul>
        <div className="pt-8 flex gap-4">
          {user && (
            <button
              onClick={handleSignOut}
              type="button"
              className="text-white bg-[#FF7F32] mt-2 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md  text-sm px-3 py-1.5 text-center  me-2 mb-2"
            >
              Logout
            </button>
          )}
          {!user && (
            <Link
              to={"/login"}
              className="text-white bg-[#FF7F32] mt-2 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md  text-sm px-3 py-1.5 text-center  me-2 mb-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
