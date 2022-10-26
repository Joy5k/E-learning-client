import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-red-400 mb-4 rounded-sm align-center">
        <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className=' rounded-full mb-2 h-14 w-14' src="https://cdn5.vectorstock.com/i/thumb-large/93/19/human-head-icon-with-light-bulb-inside-vector-35569319.jpg" alt="" />
                    <span className='font-bold ml-2 text-3xl mb-4'>E-LEARNING</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li  className='font-semibold'><Link to='/'>Home</Link></li>
            <li  className='font-semibold' tabIndex={0}>
              <Link to='/courses'>
                Courses
              </Link>
            </li>
            <li className='font-semibold'><Link to='/faq'>FAQ</Link></li>
            <li  className='font-semibold' ><Link to='/blog'>Blog</Link></li> 
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
          </ul>
        </div>
      </div>
    );
};

export default Header;