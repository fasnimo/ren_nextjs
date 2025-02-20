import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 px-6 flex gap-x-8 items-center border-b border-gray-300">
      <Link 
        href="/" 
        className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-bold"
      >
        Home
      </Link>
      <Link 
        href="/tours" 
        className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-bold"
      >
        Tours
      </Link>
    </nav>
  )
}

export default NavBar
