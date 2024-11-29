'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EditTour from '@/components/EditTour';

const EditTourPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [tour, setTour] = useState(null);

//   useEffect(() => {
//     const fetchTour = async () => {
//       const response = await fetch(`https://www.course-api.com/react-tours-project/${id}`);
//       const tourData = await response.json();
//       setTour(tourData);
//     };

//     fetchTour();
//   }, [id]);


useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/tours/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch tour data');
        }
        const tourData = await response.json();
        console.log('Fetched tour data:', tourData); // Debug here
        setTour(tourData);
      } catch (error) {
        console.error('Error fetching tour:', error);
      }
    };
  
    fetchTour();
  }, [id]);


  if (!tour) return <div>Loading...</div>;

  return <EditTour tourData={tour} />;
};

export default EditTourPage;
