import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/authProvider/AuthProvider';
import { FaGoogle,FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { toast} from 'react-toastify';

const Login = () => {

  const { LoginUser, LoginWithGoogle } = useContext(AuthContext);
  
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
      const password = form.password.value;
      LoginUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          toast.success('Successfully Login', {
            position: toast.POSITION.TOP_CENTER
        })
        })
        .catch(error => {
          const errorMassage = error.message;
          toast.error(errorMassage,{
            position: toast.POSITION.TOP_CENTER
        })
        })
  }

  // Google SignIn
  const handleLoginWithGoogle = () => {
    LoginWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .then(error => {
        console.log(error);

    })
  }
  
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
         <img className='w-3/4' src={img} alt="" />
           
          </div>
          <div className="card flex-shrink-0 py-20 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login</h1>
           <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
                <div className="form-control mt-6">
      <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              <p className='text-center font-medium'>or Sign In with </p>
              <div className='flex justify-center'>
        
       <span onClick={handleLoginWithGoogle} className='mr-4 hover:bg-slate-200 bg-slate-100 p-2 rounded-full cursor-pointer'><FaGoogle className=' text-2xl'></FaGoogle></span>
         
                <span className=' hover:bg-slate-200 bg-slate-100 p-2 rounded-full cursor-pointer'><FaFacebook className='text-blue-700 text-2xl'></FaFacebook></span>
              </div>
                    </form>
                    <p className=' text-center'>New to Genius Car <Link className='text-orange-600 font-semibold hover:underline'
                        to="/signUp">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;