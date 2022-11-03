import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse 
            ">
  <input type="checkbox" className="peer " /> 
  <div className="border-b-2 collapse-title bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-gray-content">
  <h2 className=' text-xl font-bold'>What is cors?</h2>
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
                    <p className='text-left  '>In React js,Cross-Origin Resource Sharing (CROS) refers to the method
                        that allows you to make request to the server deployed at a different
                         domain.As a reference.if the fronted and backend are two differen domains,we need cors there.
    </p>
                </div>
            </div> 

{/* second question */}

            <div className="collapse 
            ">
  <input type="checkbox" className="peer " /> 
  <div className="border-b-2 collapse-title bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-gray-content">
  <h2 className=' text-xl font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
    <p className='text-left  '> <span className='font-bold text-black'>01 Question ans:</span> Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Cross-Platform Solutions. For Mobile or Web Apps. Monitor App Performance.</p>
    <p className='text-left  '> <span className='font-bold text-black'>02 Question ans:</span> Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Cross-Platform Solutions. For Mobile or Web Apps. Monitor App Performance.</p>
    <p className='text-left  '> appwrite. Appwrite is a backend server for Flutter, Mobile, and Web developers. It is open-source, secure, and provides a self-hosting solution that is easy to use. It is a great open source Firebase alternative. Appwrite supports multiple SDKs, including Flutter, Web, Apple, and Android.</p>
             </div>
            </div> 
            <div className="collapse 
            ">
  <input type="checkbox" className="peer " /> 
  <div className="border-b-2 collapse-title bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-gray-content">
  <h2 className=' text-xl font-bold'>How does the private route work?</h2>
  </div>
  <div className=" collapse-content bg-primary text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
    <p className='text-left  '>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div> 
            <div className="collapse 
            ">
  <input type="checkbox" className="peer " /> 
  <div className="border-b-2 collapse-title bg-gray-400 text-primary-content peer-checked:bg-gray-400 peer-checked:text-gray-content">
  <h2 className=' text-xl font-bold'>What is Node? How does Node work?</h2>
  </div>
  <div className=" collapse-content bg-primary text-primary-content peer-checked:bg-gray-500 peer-checked:text-secondary-content"> 
    <p className='text-left  '>  <span className='font-bold text-black'>01 Question ans:</span>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. </p>
                    <p> <span className='font-bold text-black'>02 Question ans:</span>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>
            </div> 
        </div>
    );
};

export default Blog;