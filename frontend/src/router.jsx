import {
    createBrowserRouter
  } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
  ]);

export default router;