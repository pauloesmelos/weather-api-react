import React from 'react';

const Button = ({ children, type }) => {
  return (
    <button type={type}
    className="p-2 bg-blue-500 text-white block w-full mt-5 shadow-sm hover:shadow-lg
    hover:text-white hover:bg-blue-800  duration-500 sm:w-full rounded-lg hover:shadow-gray-300">
        {children}
    </button>
  )
}

export default Button;