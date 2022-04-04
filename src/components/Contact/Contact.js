import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 h-[70vh]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' font-mono text-xl text-center md:text-3xl '>
          Contact Us, Our Office Address Down Below
        </h1>

        <div className='flex justify-center items-center mb-20'>
          <Link to='bd-address' className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            BD Address
          </Link>
          <Link  to='us-address' className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            US Address
          </Link>

        </div>
        <Outlet></Outlet>
      </div>
    </section>
    );
};

export default Contact;