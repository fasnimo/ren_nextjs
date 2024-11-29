'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  error: string;
};

const EditTour = ({ tourData }: { tourData: Tour }) => {
  const router = useRouter();
  const [tour, setTour] = useState<Tour>(tourData);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTour({ ...tour, [name]: value });
  };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Update the tour data in the backend or state management (API call)
//     // For now, just log the updated tour
//     console.log('Updated tour:', tour);
    
//     // Redirect to the tour page after editing
//     router.push(`/tours/${tour.id}`);
//   };


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting tour:', tour); // Debugging log

    if (!tour.id) {
        setError('Tour ID is missing!');
        return;
    }

    try {
      //const response = await fetch(`https://www.course-api.com/react-tours-project/${tour.id}`
      const response = await fetch(`http://localhost:3001/api/tours/${tour.id}`, {
        method: 'PUT', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tour),
      });

      if (!response.ok) {
        throw new Error('Failed to update the tour');
      }

      // Optionally fetch the updated data
      const updatedTour = await response.json();
      console.log('Updated tour:', updatedTour);

      // Redirect to the updated tour page
      router.push(`/tours/${tour.id}`);
    } catch (err) {
    console.error('Error updating tour:', err);
    setError(err instanceof Error ? err.message : 'Unknown error');
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Tour</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={tour.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Info:
          <textarea name="info" value={tour.info} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input type="text" name="image" value={tour.image} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="text" name="price" value={tour.price} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditTour;
