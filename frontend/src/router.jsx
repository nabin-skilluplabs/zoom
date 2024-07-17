import {
    createBrowserRouter
  } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import GetStarted from "./pages/GetStarted";
import SignUpVerification from "./pages/SignUpVerification";
import SignUpActivate from "./pages/SignUpActivate";


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
      path: "/sign-up/email",
      element: <GetStarted />,
  },
  {
    path: "/sign-up/verification",
    element: <SignUpVerification />,
},
{
  path: "/sign-up/activate",
  element: <SignUpActivate />,
},
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
      path: "/chat",
      element: <Chat />,
  },
  ]);

export default router;