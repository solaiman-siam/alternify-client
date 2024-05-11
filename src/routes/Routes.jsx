import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import AboutUs from "../pages/AboutUs";
import Donations from "../pages/Donations";
import MyRecommendations from "../pages/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import MyQueries from "../pages/MyQueries";
import Queries from "../pages/Queries";
import AddQueries from "../pages/AddQueries";
import ProductDetails from "../pages/ProductDetails";

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
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/my-queries",
        element: <MyQueries></MyQueries>,
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
      {
        path: "/add-queries",
        element: <AddQueries></AddQueries>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);
