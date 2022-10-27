import React from 'react';
import { Link } from 'react-router-dom';
import'./coursesCart.css'
const CoursesCart = ({ course }) => {
  const { title, img, price, id } = course;
  const showDetails = () => {
    
  }
    return (
           <div className=" card card-compact  mb-4 w-10/12 bg-base-100 shadow-xl">
        <figure><img className='h-48 w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center ">{title}</h2>
                <p>Price:{ price} $</p>
          <div className="card-actions justify-center">
            <Link to={`/courses/${id}`} className="w-full btn btn-accent">Get Premium  Access</Link>
          </div>
        </div>
      </div>
    
    );
};

export default CoursesCart;