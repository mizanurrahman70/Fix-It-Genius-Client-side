import {createBrowserRouter,} from "react-router-dom";
import Root from "../Lay out/Root";
import Login from "../Pages/Login";
import Home from "../Home/Home";
import Regester from "../Pages/Regester";
import ServiceAdd from "../Pages/Service Add/ServiceAdd";
import ServiceDtls from "../Home/Services Data/ServiceDtls";
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
        {
            path:'/add_service',
            element:<ServiceAdd></ServiceAdd>
        },
        {
            path:'/services/:id',
            element:<ServiceDtls></ServiceDtls>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            
        },
      ])

    },
  ]);
  export default router