import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const {logInUser}=useContext(AuthContext);
  const location=useLocation()
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email=form.get('email');
    const password=form.get('password');
    console.log(email,password);
    logInUser(email,password)

    logInUser(email,password)
    .then(result=>{
      console.log(result);
      navigate(location ?.state ? location.state: '/');

    })
    .catch(error=>{
      console.log(error);
 
    })
  };
  return (
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-2">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;