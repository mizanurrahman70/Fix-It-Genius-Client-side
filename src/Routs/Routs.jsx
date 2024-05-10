import {createBrowserRouter,} from "react-router-dom";
import Root from "../Lay out/Root";
import Login from "../Pages/Login";
import Home from "../Home/Home";
import Regester from "../Pages/Regester";
import ServiceAdd from "../Pages/Service Add/ServiceAdd";
import ServiceDtls from "../Home/Services Data/ServiceDtls";
import AllServices from "../Home/Services Data/AllServices";
import Submiton from "../Pages/Submiton/Submiton";
import Manage from "../Pages/Mannage service/Manage";
import ServiceUpdate from "../Pages/Service Add/Service Update/ServiceUpdate";
import BookedService from "../Pages/Booked Service/BookedService";
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
        {
            path:'/all_services',
            element:<AllServices></AllServices>,
            loader:()=>fetch(`http://localhost:5000/services`)
            
        },
        {
            path:'/submition/:id',
            element:<Submiton></Submiton>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            
            
        },
        {
            path:'/manage_service',
            element:<Manage></Manage>,
          },
        {
            path:'/Update_service/:id',
            element:<ServiceUpdate></ServiceUpdate>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          },
        {
            path:'/booked_serviced',
            element:<BookedService></BookedService>,
           
          },
      ])

    },
  ]);
  export default router