import React from 'react';

const Input = ({ label, type, name, id, value, setValue, ...props }) => {
  return (
    <>
        <label className="block text-3xl text-gray-600 font-light font-serif my-3
        sm:text-5xl">
            {label}
        </label>
        <input 
            type={type} 
            name={name} 
            id={id} 
            value={value} 
            onChange={({ target }) => setValue(target.value)} 
            {...props}
            className="p-2 rounded-md bg-white w-full sm:w-[400px] outline-none text-center placeholder:text-gray-500
            hover:shadow-lg focus:outline focus:outline-blue-600 focus:outline-4 focus:bg-gray-100"
        />
    </>
  )
}

export default Input;