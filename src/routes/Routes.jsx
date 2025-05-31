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
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
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
