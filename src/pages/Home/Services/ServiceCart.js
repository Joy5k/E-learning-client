import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCart = ({ service }) => {
  const { img, price, title } = service;
  console.log(img,'service img');
    return (
        <div data-aos="zoom-out" className="w-96 h-96 p-4 border card card-compact bg-base-100 shadow-xl">
        <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
        <div className="relative card-body">
                <h2 className="card-title">{ title}</h2>
          <div className="absolute bottom-0  card-actions justify-end">
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
            <button className="btn bg-transparent border-none text-orange-600"><FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>
    );
};
AOS.init();
export default ServiceCart;