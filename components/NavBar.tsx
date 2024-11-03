import Link from 'next/link'
import React from 'react'

// In NavBar you can interate over links, but not here because there aren't many links.
function NavBar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
        <Link href='/'>Home</Link>
        <Link href='/tours'>Tours</Link>
    </nav>
  )
}

export default NavBar