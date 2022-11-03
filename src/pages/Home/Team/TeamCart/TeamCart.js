import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamCart = ({ team }) => {
    const { img, title, expert } = team;
    console.log('check ',img)
    return (
        <div  data-aos="fade-down-left"
        data-aos-anchor-placement="bottom-bottom" className=" mx-auto my-5 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
    <figure><img src={img} alt="car info" /></figure>
              <div className="items-center card-body">
         <h2 className=" card-title font-bold text-2xl  ">{title}</h2>
         <p className='text-gray-600 font-semibold'>{expert }</p>
                <span className='flex  gap-3 my-4 '>
                    <FaFacebook className=' w-10  text-blue-900 cursor-pointer hover:w-11 h-11' ></FaFacebook>
                    <FaTwitter className='rounded-full p-2 w-10  bg-sky-600 text-white cursor-pointer  hover:w-11 h-11'></FaTwitter>
                    <FaLinkedinIn className='w-10 text-white  bg-blue-700 p-2 rounded-lg cursor-pointer  hover:w-11 h-11'></FaLinkedinIn>
                    <FaInstagram className='w-10  p-1  text-white bg-gradient-to-t from-red-400 to-pink-600 rounded-full hover:w-11 h-11 cursor-pointer'></FaInstagram>
   </span>
            </div>
  </div>
    );
};

export default TeamCart;