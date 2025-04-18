import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-100 to-blue-100">
      {/* Apply negative top margin to shift the card upward */}
      <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-2xl -mt-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Got a Great Tour Idea? Share It!
        </h1>
        <div className="space-y-6">
          <Link 
            href="/form" 
            className="block text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link 
            href="/tours/create" 
            className="block text-2xl text-green-600 hover:text-green-800 transition-colors duration-200"
          >
            Add a Tour Suggestion
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
