import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-7xl font-extrabold text-gray-900">Home Page</h1>
      <Link 
        href="/form" 
        className="text-xl text-blue-500 hover:text-blue-700 mt-8 transition-colors duration-200"
      >
        Go to Form Page
      </Link>
    </div>
  )
}

export default HomePage
