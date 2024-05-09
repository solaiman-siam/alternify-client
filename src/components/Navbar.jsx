import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import logo from "../.././public/alternify_logo.png";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logoutUser } = useAuth();

  const [isOpen, setOpen] = useState(false);

  // logout user
  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full relative max-w-7xl px-4 mx-auto  h-20  ">
      <div className="flex justify-between px-6  h-full items-center ">
        <Link to="/" className="flex justify-center items-center ">
          <img className="w-[40px]" src={logo} alt="" />
          <h3 className="text-3xl font-bold">Alternify</h3>
        </Link>
        <ul className="lg:flex gap-4 hidden pl-14">
          <NavLink
            to="/"
            className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]"
          >
            Home
          </NavLink>

          {user?.email ? (
            <>
              <NavLink
                className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]"
                to="/bookings"
              >
                My Queries
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]"
            >
              Login
            </NavLink>
          )}

          <NavLink className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]">
            Queries
          </NavLink>
        </ul>
        <div className="flex gap gap-2 ">
          <div className="lg:flex hidden items-center gap-4">
            {user?.email ? (
              <>
                <button
                  onClick={handleSignOut}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md  text-sm px-3 py-1.5 text-center  me-2 mb-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {" "}
                <Link
                  to={"/login"}
                  className="text-sm rounded-none hover:border-white hover:bg-[#FF3811] btn-ghost btn-outline border-[#FF3811]"
                >
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="lg:hidden ">
            <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
          </div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "bg-orange-100 left-0 top-0 lg:hidden md:hidden absolute transition-all duration-300 pt-10  h-screen  px-20  z-10 "
            : "bg-orange-100  absolute top-0 md:hidden lg:hidden  -left-96 transtion-all duration-300  px-20 pt-10 z-10 h-screen"
        }
      >
        <div>
          <Link to="/" className="">
            <img className="w-24" src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex-col flex space-y-4  pt-10">
          <NavLink
            to="/"
            className="hover:text-[#FF3811] font-semibold hover:link-hover"
          >
            Home
          </NavLink>
          <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
            Login
          </NavLink>
          <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
            List
          </NavLink>
          <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
            Blog
          </NavLink>
          <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
            Contact
          </NavLink>
        </ul>
        <div className="pt-8 flex gap-4">
          <Link
            to="/login"
            className="btn btn-sm text-sm bg-[#FF3811] hover:bg-[#FF3811] text-white font-medium rounded-none"
          >
            Login
          </Link>
          <Link className="btn btn-sm text-sm hover:border-white hover:bg-[#FF3811] btn-ghost btn-outline border-[#FF3811] rounded-none">
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
