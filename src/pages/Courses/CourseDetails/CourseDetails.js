import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import "./CourseDetails.css";




const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const {id, img, price, title,description
    ,feedback,rating,duration} = course;
  return (

  <div>
  <Pdf targetRef={ref} filename="code-example.pdf">
    {({ toPdf }) => <header className='bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200'> <button className='p-4 rounded-lg m-4 font-bold bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200' onClick={toPdf}>Generate Pdf</button></header>}
  </Pdf>
      <div className=' pt-4 bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200'>
             
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
          <Link to={`/checkOut/${id}`} className="btn btn-accent w-full h-10">Check Out</Link>
        </div>
      </div>
    </div>
            </div>
            <div>

            </div>
      </div>
      



      <div className='control-pdf mt-72 mb-72 flex justify-center items-center' ref={ref}>
      <img className='text-right' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABJCAMAAADFacLVAAAAY1BMVEUAak70KkEAbU//I0D3KEH7JkCWUEjIPkVPYUyyRkbbNUPlM0PYNkOrSEeFVEk/Y01yWkq6REZdXksWaU6fTUjsLUHgM0OlSUd2V0pnXEsmaE7MPEQ6ZU0tZk3UOERiXUuNU0l+tX8ZAAABUUlEQVRoge2Z2XLCMAxFbdkmYU2AJOyQ///KakrpDC0Be0bOfdH5gTNXcrwoxiiKoihjQ7+M7S376Wk2ny+K5aoaz06mLoIL/ofg7HpjxrDTtmmdt0941/X53dTbYP/jQ1vnlVM1cy/E9+TFNqOc9sEPmJnQltnc1AxFflQ9V9Fp997MuH0WN00+mrnohwxuqiPM7D7Lq48xYu53Jx6bTm/W9lPsRtgdWe7v3MIlpy4yNKvXsrHjQ/MXdpE00zU6NHd7KRn7khDa2lbQTJNXp9VwxW+C6pR6c8V3ghVPEfMav8qpy6TQos2uk1rNzT5KmWmVqq7E1GkLnNUbMXWTqj6IqYGpcb0GrnDkdw3czYB7OPDkAp7XyFsK8G6GvJEC7+HA1wfyzYV8aQLf18ipAnKWgpwgIedmBjgtNMgZqQFOhu920Dz8Ycf8BVAURVH+8AWjGBLwuhBkmgAAAABJRU5ErkJggg==" alt="" />
        
  </div>
</div>
);

};

export default CourseDetails;