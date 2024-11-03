'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const EditTour = ({ tourData }: { tourData: Tour }) => {
  const router = useRouter();
  const [tour, setTour] = useState<Tour>(tourData);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTour({ ...tour, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Update the tour data in the backend or state management (API call)
    // For now, just log the updated tour
    console.log('Updated tour:', tour);
    
    // Redirect to the tour page after editing
    router.push(`/tours/${tour.id}`);
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
