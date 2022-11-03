import React from 'react';
import { FaClock, FaUsers } from 'react-icons/fa';
import person from '../../../../assets/icons/person.svg';
import check from '../../../../assets/icons/check.svg';
import deliveryt from '../../../../assets/icons/deliveryt.svg';
import Group from '../../../../assets/icons/group.svg';
import quote from '../../../../assets/icons/quote.svg';
import Wrench from '../../../../assets/icons/Wrench.svg';

const Features = () => {
    return (
        <div >
            <div>
                <p className='text-center text-orange-600 font-bold text-xl'>Core Features</p>
                <h1 className='my-5 text-5xl font-bold text-center'>Why Choose Us</h1>
                <p className='mb-12 w-6/12  mx-auto text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>  
            
            <div  className='lg:w-11/12 mx-auto md:w-10/12 sm:7/12  grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-3'>

            <div data-aos="flip-right" className="border mx-auto my-5 p-3 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
     <figure >
             <img src={Group} alt="" />      
    </figure>
     <div className="items-center card-body">
     <h2 className=" card-title font-bold text-xl  ">Expert Team</h2>
    
  </div>
                 </div>  
            <div data-aos="flip-right" className="border mx-auto my-5 p-3 card card-compact md:w-11/12 sm:w-6/12 bg-orange-600 text-white shadow-xl">
     <figure className=''>
               <FaClock className='w-20 h-16 '></FaClock>         
    </figure>
     <div className="items-center card-body">
     <h2 className=" card-title font-bold text-xl  ">Expert Team</h2>
    
  </div>
                </div>
            <div data-aos="flip-right" className="border mx-auto my-5 p-3 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
     <figure >
     <img src={person} alt="" />        
    </figure>
     <div className="items-center card-body">
     <h2 className=" card-title font-bold text-xl  ">Expert Team</h2>
    
  </div>
                </div>
            <div data-aos="flip-right" className="border mx-auto my-5 p-3 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
     <figure >
         <img src={Wrench} alt="" />        
    </figure>
     <div className="items-center card-body">
     <h2 className=" card-title font-bold text-xl  ">Expert Team</h2>
    
  </div>
                </div>
            <div data-aos="flip-right" className="border mx-auto my-5 p-3 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
     <figure >
                  <img src={check} alt="" />     
    </figure>
     <div className="items-center card-body">
     <h2 className=" card-title font-bold text-xl  ">Expert Team</h2>
    
  </div>
                </div>
            <div data-aos="flip-right" className="border mx-auto my-5 p-3 card card-compact md:w-11/12 sm:w-6/12 bg-base-500 shadow-xl">
     <figure >
            <img src={deliveryt} alt="" />      
    </figure>
     <div className="items-center card-body">
     <h2 className=" card-title font-bold text-xl  ">Expert Team</h2>
    
  </div>
                </div>
              </div>
            
            
        </div>
    );
};

export default Features;