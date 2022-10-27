import React from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import CoursesCart from '../Courses/coursesCart/CoursesCart';

const Home = () => {
    return (
      <div>
         <div className="hero min-h-screen bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200 w-10/12 mx-auto	 ">
        <div className="hero-content text-center">
                <div className="max-w-md">
              <h1 className='text-6xl text-slate-800 font-bold'>E-LEARNING</h1>
              <p className='text-xl font-bold text-gray-500 italic'> We Offer An Instant Certificate.No Classroom All Online.Start Now Pay Later.. Explore More Ways To Use pc with eLearning. Book a Demo. Contact us. Enterprise Support. Help Centre Available. Desktop Version Available.</p>
            <p className="py-6 text-xl text-white">Please Sign Up for Getting All Tutorial</p>
            <Link to='/courses' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
        </div>
        
       </div>
    );
};

export default Home;