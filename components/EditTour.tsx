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
  const [tour, setTour] = useState<Tour | null>(tourData);  // Allow `null` in state
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setTour((prevTour) => prevTour ? { ...prevTour, [name]: value } : null);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Changing field: ${name}, New value: ${value}`); // Debugging log to see input values
    setTour((prevTour) => prevTour ? { ...prevTour, [name]: value } : null);
  };
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!tour) return;  // Early return if tour is null

  //   setLoading(true);
  //   setError(null);
  //   setSuccess(false);

  //   if (!tour.id) {
  //       setError('Tour ID is missing!');
  //       setLoading(false);
  //       return;
  //   }

  //   try {
  //     const response = await fetch(`http://localhost:3001/api/tours/${tour.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(tour),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to update the tour');
  //     }

  //     const updatedTour = await response.json();
  //     setSuccess(true);
  //     router.push(`/tours/${tour.id}`);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'Unknown error');
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!'); // Debugging log to see if the form is being submitted
  
    if (!tour) {
      console.error('Tour data is missing');
      return;
    }
  
    if (!tour.id) {
      setError('Tour ID is missing!');
      return;
    }
  
    setLoading(true);
    setError(null);
    setSuccess(false);
  
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
      console.log('Tour updated:', updatedTour); // Debugging log to see if the response is valid
      setSuccess(true);
      router.push(`/tours/${tour.id}`);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };
  
  if (!tour) return <div>Loading...</div>;  // Show loading state if tour is null

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Tour</h2>
      {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
      {success && <div className="success-message" style={{ color: 'green' }}>Tour updated successfully!</div>}
      
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
      {/* <button type="submit" disabled={loading}>Save Changes</button> */}
      {loading && <div>Saving...</div>}
    </form>
  );
};

export default EditTour;
