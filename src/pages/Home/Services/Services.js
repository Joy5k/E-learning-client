import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div >
            <div className='text-center mb-4'>
            <p className='text-2xl font-semibold text-orange-600'>Services</p>
            <h1 className='text-5xl font-bold '>Our Service Area</h1>
            <p className='w-6/12  mx-auto '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <h3>Services:{services.length }</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
        }
            </div>
        </div>
    );
};

export default Services;