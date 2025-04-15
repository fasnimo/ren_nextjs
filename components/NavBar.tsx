'use client';

import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function NavBar() {
  const { data: session, status } = useSession();
  // console.log(session)
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

      {status === 'authenticated' && (
        <Link 
          href="/tours/create" 
          className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-bold"
        >
          Create Tour
        </Link>
      )}

      <div className="ml-auto flex items-center space-x-4">
        {status === 'loading' ? (
          <span className="text-gray-500">Checking login...</span>
        ) : session ? (
          <>
            <span className="text-gray-600 font-medium">
              Welcome, {session.user?.name || 'User'}
            </span>
            <button
              onClick={() => signOut()}
              className="text-red-600 hover:underline font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
