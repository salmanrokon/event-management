import { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({Children}) => {
    const{user,loading}=useContext(AuthContext)
    const location=useLocation();
    console.log(location);
    if (loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return Children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;