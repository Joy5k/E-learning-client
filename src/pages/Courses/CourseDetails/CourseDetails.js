import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar,FaStarHalf } from "react-icons/fa";
const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const { img, price, title,description
    ,feedback,rating,duration} = course;
    return (
        <div className='bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200'>
              <header className='bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200'>
                <button className='p-4 rounded-lg m-4 font-bold bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200'>Download PDF</button>
            </header>
            <div className='w-full flex justify-center'>
          
          <div className=" border rounded-none drop-shadow-2xl

card w-96 bg-base-100 shadow-xl lg:w-5/12 md:w-8/12 sm:w-11/12">
                        <h2 className='text-3xl font-bold m-2'>{ title}</h2>
                    <figure className="p-4">
        <img src={img} alt="Shoes" className=" w-full h-full" />
      </figure>
      <div className=" text-left card-body  p-4">
          <h2 className="card-title text-2xl font-bold ">Price:{ price}$</h2>
             <p className='text-left font-semibold'><span className='font-bold underline italic'>Description:</span> { description}</p>
                        <div className='flex justify-between align-middle'>
                            <span className='flex mt-1 text-yellow-400'><span className='mr-1 text-black font-semibold'>Rating:</span><FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStarHalf></FaStarHalf>
                                </span>
                            <span className='font-bold'>Duration:
                                {duration}hr</span>
        </div>
                        
                        <div className="card-actions">
          <button className="btn btn-accent w-full h-10">Check Out</button>
        </div>
      </div>
    </div>
            </div>
            <div>

            </div>
        </div>
        
    );
};

export default CourseDetails;