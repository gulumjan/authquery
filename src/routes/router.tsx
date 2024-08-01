import { createBrowserRouter } from "react-router-dom";
import LayoutSite from "../appPages/site/components/layout/LayoutSite";
import HomePage from "../appPages/site/components/pages/HomePage";
import AboutPage from "../appPages/site/components/pages/AboutPage";
import LayoutAuth from "../appPages/auth/components/layout/LayoutAuth";
import SignInPage from "../appPages/auth/components/pages/SignInPage";
import SignUpPage from "../appPages/auth/components/pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSite />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LayoutAuth />,
    children: [
      {
        path: "/auth/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);
