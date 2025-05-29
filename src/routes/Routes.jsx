import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
//   {
//     path: "/auth",
//     element: <AuthLayout></AuthLayout>,
//     children: [
//       {
//         path: "/auth/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/auth/register",
//         element: <Register></Register>,
//       },
//     ],
//   },
]);

export default router;