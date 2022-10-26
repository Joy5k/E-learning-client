import React from 'react';
import'./coursesCart.css'
const CoursesCart = ({ course }) => {
    console.log('singalcourse', course);
    const {title,img,price}=course;
    return (
        <div className=" card card-compact  mb-4 w-10/12 bg-base-100 shadow-xl">
        <figure><img className='h-48 w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
                <p>{ price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default CoursesCart;