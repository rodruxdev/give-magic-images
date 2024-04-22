import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Root } from "./Root";
import { Login } from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Landing></Landing> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
