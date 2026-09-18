import { createBrowserRouter } from "react-router";
import AppLayout from "./AppLayout";
import Cart from "./constant/cart";
import Contact from "./constant/contact";
import Home from "./pages/Home";
import SignIn from "./pages/signIn";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "signin",
        Component: SignIn,
      },
    ],
  },
]);
