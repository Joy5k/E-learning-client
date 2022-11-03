import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ProductsCart.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const ProductsCart = ({product}) => {
    const { img, title, price } = product;
    return (
      <div data-aos="flip-right" className="border mx-auto my-5 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
  <figure className='p-5'><img className='bg-gray-200 h-96 w-96 p-3 rounded-lg' src={img} alt="car info" /></figure>
            <div className="items-center card-body">
                <span className='flex text-center text-orange-400 text-xl'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </span>
                <h2 className=" card-title font-bold text-2xl  ">{title}</h2>
                <p className='text-orange-600 font-semibold'>${price}.00</p>
  </div>
</div>

    );
};
// AOS.init();
export default ProductsCart;