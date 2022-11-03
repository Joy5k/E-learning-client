import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import { FaCalendarAlt, FaCircle, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaSms, } from "react-icons/fa";
import Products from '../Products/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from '../Team/Team/Team';
import Features from '../Features/Features/Features';
import Testimonial from '../Testimonial/Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>

            <div data-aos="flip-up" className='rounded-lg my-32 bg-black text-white grid sm:grid-cols-1 sm:gap-5  md:grid-cols-2 md:gap-5 lg:grid-cols-3  py-24 px-16'>
                <div className='flex gap-2 mt-5 justify-center'>
                    <div>
                        <div className='w-10 h-10 relative'>
                        <FaCalendarAlt className='w-10 h-10'>
                    </FaCalendarAlt>
                     <FaClock className='text-red-600 w-5 h-5 absolute top-1/2 left-5'></FaClock>
                        </div> 
                    </div>
                    <div>
                        <p className='font-medium'>We are open monday-friday</p>
                        <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
                    </div>
                </div>

                <div className='flex gap-4 mt-5 justify-center'>
                    <div className='mt-2'>
                        <div className='w-10 h-10 relative'>
                        <FaPhoneAlt className='w-10 h-10'>
                    </FaPhoneAlt>
                     <FaSms className='text-red-600 w-7 h-6 absolute  bottom-4 left-5'></FaSms>
                        </div> 
                    </div>
                    <div>
                        <p className='font-medium'>Have a question?</p>
                        <p className='text-2xl font-bold'>+2546 251 2658</p>
                    </div>
                </div>

                <div className='flex gap-4 mt-5 justify-center'>
                    <div>
                        <div className='w-10 h-10 relative'>
                        <FaMapMarkerAlt className='w-11 h-10 text-red-600'>
                    </FaMapMarkerAlt>
                     <FaCircle className='text-white w-3 h-3 absolute top-2 left-4'></FaCircle>
                        </div> 
                    </div>
                    <div>
                        <p className='font-medium'>Need a repair? our address</p>
                        <p className='text-2xl font-bold'>Liza Street, New York</p>
                    </div>
                </div>
            </div>
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
          
        </div>
    );
};
AOS.init();
export default Home;