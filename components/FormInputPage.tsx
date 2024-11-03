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
        e.preventDefault()          
        setFormSuccess(true)      
    }

  return (
      <div className='text-center'>
            <h1>Contact form</h1>
            {formSuccess ?
            <div className='text-center'>Form Submitted</div>
            :
            <form method="POST" onSubmit={submitForm} className='text-center'>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" onChange={handleInput} value={formData.name} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" name="email" onChange={handleInput} value={formData.email} />
                        </div>

                        <div>
                            <label>Message</label>
                            <textarea name="message" onChange={handleInput} value={formData.message}></textarea>
                        </div>
                    <button className="btn btn-primary" type="submit">Send message</button>
            </form>
            }   
       
      {(formSuccess)?  
                <div>
                  <h1 className='text-left p-5'>Profile</h1>
                  <ul>
                    <li>Name: {formData.name}</li>
                    <li>Email: {formData.email}</li>
                    <p>Message: {formData.message}</p>
                  </ul>
                </div>
            : <p>Form not submitted</p>}
    </div>
  )
}

export default Form