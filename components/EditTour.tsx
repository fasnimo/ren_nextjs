'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  error?: string;  // Error can be optional
};

const EditTour = ({ tourData }: { tourData: Tour }) => {
  const router = useRouter();
  const [tour, setTour] = useState<Tour>(tourData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [success, setSuccess] = useState<boolean>(false); // Success state
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTour({ ...tour, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  // Start loading
    setError(null);    // Reset error
    setSuccess(false); // Reset success message

    if (!tour.id) {
        setError('Tour ID is missing!');
        setLoading(false);
        return;
    }

    try {
      const response = await fetch(`http://localhost:3001/api/tours/${tour.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tour),
      });

      if (!response.ok) {
        throw new Error('Failed to update the tour');
      }

      const updatedTour = await response.json();
      setSuccess(true); // Set success to true on successful update
      router.push(`/tours/${tour.id}`); // Redirect after successful update
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Tour</h2>
      {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}  {/* Show error message */}
      {success && <div className="success-message" style={{ color: 'green' }}>Tour updated successfully!</div>}  {/* Show success message */}
      
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
      <button type="submit" disabled={loading}>Save Changes</button>
      {loading && <div>Saving...</div>}  {/* Show loading indicator */}
    </form>
  );
};

export default EditTour;
