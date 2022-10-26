import React from 'react';

const SignUp = () => {
    return (
        <form  className=" bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200  hero min-h-screen w-full bg-base-200">
  <div className="hero-content w-8/12 grid grid-cols-1">
    <div className="text-center lg:text-center block">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full mx-auto  max-w-md shadow-2xl bg-base-100">
      <div className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="PhotoURL" name='photoURL' className="input input-bordered" />
        </div>
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
            <span>  ...  </span>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</form>
    );
};

export default SignUp;