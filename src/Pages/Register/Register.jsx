import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {createUser}=useContext(AuthContext);

  const handleRegister=(e)=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const name=form.get('name'); 
    const email=form.get('email');
    const password=form.get('password');
    console.log(name,email,password);

   createUser(email,password)
   .then(result=>{
    console.log(result);
 
   })
   .catch(error=>{
    console.log(error);
   })

  }
    return (
        
 
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" name="name" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
    </div>
   
  

    );
};

export default Register;