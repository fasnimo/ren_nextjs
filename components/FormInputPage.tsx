'use client'
import React from 'react'
import { useState } from 'react';

function Form() {
    const [formSuccess, setFormSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInput = (e: React.ChangeEvent<any>): void => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
      
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
    }
    
    const submitForm = (e: React.ChangeEvent<any>): void => {
        e.preventDefault();          
        setFormSuccess(true);      
    }

  return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6'>
            <h1 className="text-3xl font-semibold mb-6">Contact Form</h1>
            {formSuccess ? 
                <div className="text-green-500 font-semibold mb-4">Form Submitted</div> 
                : 
                <form method="POST" onSubmit={submitForm} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={handleInput} 
                            value={formData.name} 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={handleInput} 
                            value={formData.email} 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            onChange={handleInput} 
                            value={formData.message} 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button 
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200"
                        type="submit"
                    >
                        Send message
                    </button>
                </form>
            }   
       
            {formSuccess ?  
                <div className="w-full max-w-md mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h1 className='text-2xl font-semibold text-gray-900 mb-4'>Profile</h1>
                    <ul className="list-none space-y-2">
                        <li><strong>Name:</strong> {formData.name}</li>
                        <li><strong>Email:</strong> {formData.email}</li>
                        <li><strong>Message:</strong> {formData.message}</li>
                    </ul>
                </div>
            : <p className="text-center text-gray-500 mt-6">Form not submitted</p>}
    </div>
  )
}

export default Form
