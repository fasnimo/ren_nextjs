'use client';

import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    await signIn('credentials', {
      username,
      password,
      callbackUrl: '/tours/create',
    });
  };

  return (
    <div className="max-w-sm mx-auto mt-24 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          name="username"
          placeholder="Username"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
