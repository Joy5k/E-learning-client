import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import {FaGoogle,FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { setUser,LogInUser, SignInWithGoogle, SignInWithGithub } = useContext(AuthContext);
    // const [user,setUser]=useState(null)
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
                setUser(user)
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            }
    )
    }
    const handleGoogleSignIn = () => {
        SignInWithGoogle(provider)
            .then(result => {
                const user = result.user;
            })
        .catch(error=>console.error(error))
  }

  // github login
    const handleGithubSignIn = () => {
        SignInWithGithub(githubProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
    .catch(error=>console.error(error))
        
    }


    return (
        <div className=" bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200  hero min-h-screen w-full bg-base-200">
  <div className="hero-content w-8/12 grid grid-cols-1">
    <div className="text-center lg:text-center block">
                    <h1 className="text-5xl font-bold"> Login now!</h1>
                    
    
    </div>
    <div className="card flex-shrink-0 w-full mx-auto  max-w-md shadow-2xl bg-base-100">
      <form  onSubmit={handleLogIn} className="card-body ">
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
                            <Link to='/signUp' className='text-blue-500 underline'>create a new account</Link>
                           <p>------------Login With------------</p>
                           
        </div>
             </form>
             <button onClick={handleGoogleSignIn} className=" w-10/12 mx-auto text-md btn  btn-outline mt-2"><FaGoogle className='mr-2 text-blue-700 text-xl'></FaGoogle> Login With Google</button>
             <button onClick={handleGithubSignIn} className= "w-10/12 mx-auto  btn  btn-outline mt-2 mb-4"> <FaGithub className='text-xl mr-2'></FaGithub> Login With Github</button>
            
    </div>
  </div>
</div>
    );
};

export default Login;