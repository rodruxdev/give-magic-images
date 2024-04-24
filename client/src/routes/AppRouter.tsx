import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Root } from "./Root";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { Gallery } from "../pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Landing></Landing> },
      { path: "/gallery", element: <Gallery></Gallery> },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/signin", element: <Signin></Signin> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
