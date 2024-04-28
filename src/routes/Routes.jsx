import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCraftItems from "../pages/AddCraftItems/AddCraftItems";
import CraftViewDetails from "../pages/CraftViewDetails/CraftViewDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllArtCraftItems from "../pages/AllArtCraftItems/AllArtCraftItems";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import UpdateDataForm from "../pages/UpdateDataForm/UpdateDataForm";

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
          path: '/allArtCraftItems',
          element: <AllArtCraftItems></AllArtCraftItems>,
          loader: () => fetch('http://localhost:5000/addCraftItems')
        },
        {
          path: '/myArtCraftList',
          element: <MyArtCraftList></MyArtCraftList>
        },
        {
          path: '/updateDataForm/:id',
          element: <UpdateDataForm></UpdateDataForm>,
          loader: ({params}) => fetch(`http://localhost:5000/addCraftItems/${params.id}`)
        }
      ]
    },
  ]);

export default router;