'use client'
import React, { useState } from 'react';

function Form() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Reset error state before submission
    setError(null);

    // Validation: all fields must be filled, and last name must be provided
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError("Please fill in all fields, including your last name.");
      return;
    }
    
    // If validation passes, mark form as submitted
    setFormSuccess(true);
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6'>
      <h1 className="text-3xl font-semibold mb-6">Contact Information Form</h1>
      
      {!formSuccess && (
        <form onSubmit={submitForm} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              onChange={handleInput} 
              value={formData.firstName} 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              onChange={handleInput} 
              value={formData.lastName} 
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
      )}
      
      {/* Show error message if error exists */}
      {error && (
        <p className="text-center text-red-500 mt-6">{error}</p>
      )}

      {formSuccess && (
        <>
          <div className="text-green-500 font-semibold mb-4">Form Submitted</div>
          <div className="w-full max-w-md mt-6 bg-white p-6 rounded-lg shadow-md">
            <h1 className='text-2xl font-semibold text-gray-900 mb-4'>Profile</h1>
            <ul className="list-none space-y-2">
              <li><strong>First Name:</strong> {formData.firstName}</li>
              <li><strong>Last Name:</strong> {formData.lastName}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Message:</strong> {formData.message}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default Form;
