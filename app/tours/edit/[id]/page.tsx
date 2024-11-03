'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EditTour from '@/components/EditTour';

const EditTourPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      const response = await fetch(`https://www.course-api.com/react-tours-project/${id}`);
      const tourData = await response.json();
      setTour(tourData);
    };

    fetchTour();
  }, [id]);

  if (!tour) return <div>Loading...</div>;

  return <EditTour tourData={tour} />;
};

export default EditTourPage;
