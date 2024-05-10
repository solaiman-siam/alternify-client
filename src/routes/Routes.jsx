import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Donations from "../pages/Donations";
import MyRecommendations from "../pages/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import MyProducts from "../pages/MyProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations></MyRecommendations>,
      },
      {
        path: "/recommendations-for-me",
        element: <RecommendationsForMe></RecommendationsForMe>,
      },
    ],
  },
]);
