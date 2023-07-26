import React from 'react';
import Switcher from './Switcher';
const Navbar = () => {

  return(
     <nav 
      className="bg-white justify-between items-start py-4 px-4 sm:px-8 lg:px-16 border-b-2 border-gray-300 dark:bg-slate-900 ">
      <div className='container mx-auto flex justify-center'>
        <a href='#' className='text-black-800 font-serif hover:text-blue-700 dark:hover:text-blue-700 dark:text-white px-4'>Home</a>
        <a href='#' className='text-black-800 font-serif hover:text-blue-700 dark:hover:text-blue-700  dark:text-white px-4'>About</a>
        <a href='#' className='text-black-800 font-serif hover:text-gray-700 dark:hover:text-blue-700   dark:text-white px-4'>Contact</a>
        </div>
        <div className="relative h-10 w-250 ">
        <div className="absolute top-0 right-0 h-12 w-16 ...">
          <Switcher />
        </div>
        </div>
        
    </nav>
  )
  
}

export default Navbar;