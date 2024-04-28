import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCraftItems from "../pages/AddCraftItems/AddCraftItems";
import CraftViewDetails from "../pages/CraftViewDetails/CraftViewDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import MyCartPage from "../pages/MyCartPage/MyCartPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/addCraftItems')
        },
        {
            path: '/addCraftItems',
            element: <AddCraftItems></AddCraftItems>
        },
        {
          path: '/craftViewDetails/:id',
          element: <CraftViewDetails></CraftViewDetails>,
          loader: () => fetch('http://localhost:5000/addCraftItems') 
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/myCartPage',
          element: <MyCartPage></MyCartPage>
        }
      ]
    },
  ]);

export default router;