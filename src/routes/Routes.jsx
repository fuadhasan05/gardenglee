import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ExploreGardeners from "../pages/ExploreGardeners";
import BrowseTips from "../pages/BrowseTips";
import MyTips from "../pages/MyTips";
import ShareTip from "../pages/ShareTip";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TipDetails from "../pages/TipDetails"; 
import UpdateTip from "../pages/UpdateTip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "explore-gardeners",
        element: <ExploreGardeners />,
      },
      {
        path: "browse-tips",
        element: <BrowseTips />,
      },
      {
        path: "my-tips",
        element: <MyTips />,
      },
      {
        path: "share-tip",
        element: <ShareTip />,
      },
      {
        path: "tips/:id", 
        element: <TipDetails />,
      },
      {
        path: "tips/update/:id", 
        element: <UpdateTip />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
