import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesCart from './coursesCart/CoursesCart';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <div className=''>
            <h2 className='font-bold  p-8  text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>Select Your Tutorial and go ahead!. <br /> Showing Available Courses below.</h2>
            <div className='courseAndSidebar  bg-gradient-to-r from-slate-400 to-red-300 to-gray-400 bg-gradient-to-r from-gray-400 via-red-200 to-blue-200 '>
    
        <div className='alignItems bg-gradient-to-r from-slate-400 to-red-300 to-gray-400 bg-gradient-to-r from-gray-400 via-red-200 to-blue-200 '>
        {/* all cart showing here */}
        
         <div className='lg:ml-16 lg:mr-8 lg:mb-8 grid lg:grid-cols-3 md:grid-cols-2 
     md:mt-4 md:mx-auto md:ml-8  sm:mx-auto sm:grid-cols-1  sm:mt-4'>
        {
            courses.map(course => <CoursesCart
                key={course.id}
            course={course}
            ></CoursesCart>)
       }
    </div>
    </div>
                <div>
                    
                    {/* side Bar */}

      <ul className="alignItems menu bg-transparent w-56 text-left p-2">
       {
             courses.map(cr => <Link to={`/courses/${cr.id}`} className='font-bold mt-2 text-blue-600 hover:underline' key={cr.id}>{ cr.id}: { cr.title}</Link>)
          }

</ul>   
        </div>
        </div>
        </div>
      
    );
};

export default Courses;<h2>ALL course</h2>