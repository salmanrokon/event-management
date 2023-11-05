import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Details from "../Pages/Details/Details";


const router=createBrowserRouter([

    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('news.json')
            },
            {
                path:"/about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/contact",
                element:<ContactUs></ContactUs>
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader:()=>fetch('../news.json')
            }
        ]
    }

])
export default router;