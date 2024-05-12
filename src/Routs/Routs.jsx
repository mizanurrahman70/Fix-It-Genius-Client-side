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
import ServiceToDo from "../Pages/Service To Do/ServiceToDo";
import PrivetRout from "../Authintication/PrivetRoute";
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
            element:<PrivetRout><ServiceAdd></ServiceAdd></PrivetRout>
        },
        {
            path:'/services/:id',
            element:<PrivetRout><ServiceDtls></ServiceDtls></PrivetRout>,
            loader:({params})=>fetch(`https://fix-it-genius-server-side.vercel.app/services/${params.id}`)
            
        },
        {
            path:'/all_services',
            element:<AllServices></AllServices>,
            loader:()=>fetch(`https://fix-it-genius-server-side.vercel.app/services`)
            
        },
        {
            path:'/submition/:id',
            element:<PrivetRout><Submiton></Submiton></PrivetRout>,
            loader:({params})=>fetch(`https://fix-it-genius-server-side.vercel.app/services/${params.id}`)
            
            
        },
        {
            path:'/manage_service',
            element:<PrivetRout><Manage></Manage></PrivetRout>,
          },
        {
            path:'/Update_service/:id',
            element:<PrivetRout><ServiceUpdate></ServiceUpdate></PrivetRout>,
            loader:({params})=>fetch(`https://fix-it-genius-server-side.vercel.app/services/${params.id}`)
          },
        {
            path:'/booked_serviced',
            element:<PrivetRout><BookedService></BookedService></PrivetRout>,
           
          },
        {
            path:'/service_to_do',
            element:<PrivetRout><ServiceToDo></ServiceToDo></PrivetRout>,
           
          },
      ])

    },
  ]);
  export default router