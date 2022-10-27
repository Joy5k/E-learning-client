import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200 w-10/12 mx-auto	 ">
        <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className='text-6xl text-slate-800 font-bold'>E-LEARNING</h1>
            <p className="py-6 text-xl text-white">Please Sign Up for Getting All Tutorial</p>
            <Link to='/login' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    );
};

export default Home;