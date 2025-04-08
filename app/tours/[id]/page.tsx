'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ToursItem from '@/components/ToursItem';
import { useSession } from 'next-auth/react';


type Params = {
    id: string;
};

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
};

const ToursItemPage = ({ params }: { params: Params }) => {
    const router = useRouter();
    const { id } = params;
    const [tour, setTour] = useState<Tour | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
    const { data: session, status } = useSession();

    
    // Fetch the tour data by ID
    const fetchTour = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/tours/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch tour');
            }
            const tourData = await response.json();
            setTour(tourData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        }
    };

    // Fetch the tour when the component mounts or when the ID changes
    useEffect(() => {
        fetchTour();
    }, [id]);

    // Handle the edit action
    const handleEdit = () => {
        router.push(`/tours/${id}/edit`);
    };

    // Handle the delete action
    const handleDelete = async () => {
        if (status === 'loading') {
          alert('Still checking login status...');
          return;
        }
      
        if (!session) {
          alert('You must be logged in to delete a tour.');
          return;
        }
      
        const confirmDelete = window.confirm('Are you sure you want to delete this tour?');
        if (!confirmDelete) return;
      
        setDeleteLoading(true);
        try {
          const response = await fetch(`http://localhost:3001/api/tours/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error('Failed to delete tour');
          }
      
          router.push('/tours');
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to delete tour');
        } finally {
          setDeleteLoading(false);
        }
      };
      
    if (error) return <div>Error: {error}</div>;
    if (!tour) return <div>Loading...</div>;

    return (
        <div>
            <ToursItem
                tourName={tour.name}
                tourImage={tour.image}
                tourInfo={tour.info}
                tourPrice={tour.price}
                onEdit={handleEdit}
                onDelete={session ? handleDelete : undefined}
                deleteLoading={deleteLoading}
            />
        </div>
    );
};

export default ToursItemPage;
