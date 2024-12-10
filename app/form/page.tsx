import React from 'react'
import FormInputPage from '@/components/FormInputPage';

function FormPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome!</h1>
          <p className="text-lg text-gray-600 mt-2">Please add comments that led you to our site!</p>
        </div>
        <FormInputPage />
    </section>
  )
}

export default FormPage
