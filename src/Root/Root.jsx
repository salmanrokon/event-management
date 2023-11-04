import { Outlet } from "react-router-dom";
import NavBar from "../Pages/shared/NavBar/NavBar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;