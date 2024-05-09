import {createBrowserRouter,} from "react-router-dom";
import Root from "../Lay out/Root";
import Login from "../Pages/Login";
import Home from "../Home/Home";
import Regester from "../Pages/Regester";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/singup',
            element:<Regester></Regester>
        },
      ])

    },
  ]);
  export default router