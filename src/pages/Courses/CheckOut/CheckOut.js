import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const checkOutCourse = useLoaderData();
    const { img, price, title, duration } = checkOutCourse;
    const showToastify = () => {
        toast.success(" Purchase Successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
}
    return (
        <div className='h-screen bg-gradient-to-r from-slate-400 to-red-300 to-gray-400bg-gradient-to-r from-gray-400 via-red-200 to-blue-200'>
       <h2 className='bg-red-200 p-4 text-3xl font-bold mb-4 '>You Selected The Course</h2>
        <div className="card card-side bg-blue-100 shadow-xl lg:w-6/12 mx-auto">
            <figure><img className='w-72 h-full' src={img} alt="Movie" /></figure>
        <div className="card-body text-left">
                <h2 className="card-title">{ title}</h2>
                <p className='text-gray-600 font-bold mt-4'>Price:{price} $</p>
                <p className='card-title mb-14'>Duration:{duration}</p>
          <div className="card-actions justify-end">
            <Link onClick={showToastify} className="btn btn-primary">CheckOut</Link>
            <Link to='/courses' className="btn btn-primary">cancel</Link>
          </div>
        </div>
            </div>
            </div>
    );
};

export default CheckOut;