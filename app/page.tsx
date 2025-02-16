import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-7xl font-extrabold text-gray-900">Home Page</h1>
      <div className="mt-8 space-y-4">
        <Link 
          href="/form" 
          className="text-xl text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          Go to Form Page
        </Link>
        <br/>
        <Link 
          href="/tours/create" 
          className="text-xl text-green-500 hover:text-green-700 transition-colors duration-200"
        >
          Create a Tour
        </Link>
      </div>
    </div>
  )
}

export default HomePage
