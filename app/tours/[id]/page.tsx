'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ToursItem from '@/components/ToursItem';

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

    useEffect(() => {
        fetchTour();
    }, [id]);

    const handleEdit = () => {
        router.push(`/tours/${id}/edit`);
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this tour?');
        if (confirmDelete) {
            try {
                await fetch(`http://localhost:3001/api/tours/${id}`, { method: 'DELETE' });
                router.push('/tours'); // Redirect to the tours list after deletion
            } catch (err) {
                setError('Failed to delete tour');
            }
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
                onDelete={handleDelete}
            />
        </div>
    );
};

export default ToursItemPage;
