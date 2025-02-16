'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Tour = {
  id?: string; // id will be generated after creation
  name: string;
  info: string;
  image: string;
  price: string;
};

const CreateTour = () => {
  const router = useRouter();
  const [tour, setTour] = useState<Tour>({ name: '', info: '', image: '', price: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTour((prevTour) => ({ ...prevTour, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/api/tours`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tour),
      });

      if (!response.ok) {
        throw new Error('Failed to create tour');
      }

      const newTour = await response.json();
      // Redirect to the new tour's page (or any confirmation page)
      router.push(`/tours/${newTour.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Add a Tour</h2>
      
      {error && <div className="text-red-600 text-center">{error}</div>}
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-600 font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={tour.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="info" className="block text-gray-600 font-medium">Info:</label>
          <textarea
            id="info"
            name="info"
            value={tour.info}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="image" className="block text-gray-600 font-medium">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={tour.image}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="price" className="block text-gray-600 font-medium">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={tour.price}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 text-white rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {loading ? 'Creating...' : 'Create Tour'}
      </button>
    </form>
  );
};

export default CreateTour;
