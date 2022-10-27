import React, { useContext } from 'react';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false)
  const handleTheme = () => {
      setTheme(!theme);
      console.log(theme);
 }
  if (user !== null) {
  console.log('get user info')
  }
  const handleLogOut = () => {
    logOut();
  }

  




    return (
      <div className="navbar bg-red-400 mb-4 rounded-sm align-center">
        
   




        <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className=' rounded-full mb-2 h-14 w-14' src="https://cdn5.vectorstock.com/i/thumb-large/93/19/human-head-icon-with-light-bulb-inside-vector-35569319.jpg" alt="" />
                    <span className='webTitle font-bold ml-2 text-3xl mb-4 '>E-LEARNING</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li  className='font-semibold'><Link to='/'>Home</Link></li>
            
            <li className='font-semibold' tabIndex={0}>
              <Link to='/courses'>
                Courses
              </Link>
            </li>
            <li className='font-semibold'><Link to='/faq'>FAQ</Link></li>
           
            <li className='font-semibold' ><Link to='/blog'>Blog</Link></li> 
            <li className='font-semibold'>
              {
                user?.uid ? <Link onClick={handleLogOut} to='/login'>Logout</Link> :
              <Link to='/login'>Login</Link>
              }
            </li>
            
            
            
            <label tabIndex={0} className="tooltip tooltip-bottom btn btn-ghost btn-circle avatar" data-tip={
              user?.displayName ? user.displayName : 'no name found'
            }>
      
              <div className=" w-10  rounded-full justify-center" >
                {
                  user?.photoURL ? 
                  <img src={
                    user?.photoURL } />
                    :
                    <FaUserAlt className='mt-4 ml-3'></FaUserAlt>
                }
             
              </div>

            </label>
            <li onClick={handleTheme}>
            {theme ?<button className='bg-black text-white font-semibold'>Light</button > : <button className='bg-white text-black font-semibold'>Dark</button> }
              </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;