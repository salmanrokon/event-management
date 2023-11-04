import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs";


const router=createBrowserRouter([

    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
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
            }
        ]
    }

])
export default router;