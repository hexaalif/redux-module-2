import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";
import WishList from "../Pages/WishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishList",
        element: <WishList />,
      },
    ],
  },
]);

export default routes;
