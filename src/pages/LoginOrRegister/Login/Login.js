import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import {FaGoogle,FaGithub } from 'react-icons/fa';

const Login = () => {
    const { LogInUser } = useContext(AuthContext);
  const [error, setError] = useState('');
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('login', user)
                form.reset();
            })
            .catch(error => {
                console.log(error);
                // const errorMessage = error.message;
// console.log(errorMessage)
                setError(error.message)
            }
    )
    }


    return (
        <form onSubmit={handleLogIn} className=" bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200  hero min-h-screen w-full bg-base-200">
  <div className="hero-content w-8/12 grid grid-cols-1">
    <div className="text-center lg:text-center block">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full mx-auto  max-w-md shadow-2xl bg-base-100">
      <div className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
         </div>
        <span className=' text-red-600'> {error}</span>
        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                           <p>------------Login With------------</p>
                            <button className=" text-md btn  btn-outline mt-2"> <FaGoogle className='mr-2 text-blue-700 text-xl'></FaGoogle> Login With Google</button>
                            <button className="btn  btn-outline mt-2"> <FaGithub className='text-xl mr-2'></FaGithub> Login With Github</button>
                           
                            
                           
                            
                            
        </div>
      </div>
    </div>
  </div>
</form>
    );
};

export default Login;