import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCraftItems from "../pages/AddCraftItems/AddCraftItems";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addCraftItems',
            element: <AddCraftItems></AddCraftItems>
        }
      ]
    },
  ]);

export default router;