import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1 className='text-7xl'>Home Page</h1>
      <Link href="/form" className='text-xl text-blue-500 mt-8'>Form Page</Link>
    </div>
  )
}

export default HomePage