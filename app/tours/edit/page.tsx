'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EditTour from '@/components/EditTour';

const EditTourPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const { id } = params;
    const [tour, setTour] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/tours/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tour data');
                }
                const tourData = await response.json();
                setTour(tourData);
            } catch (err) {
                setError('Failed to load tour details');
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return <EditTour tourData={tour} />;
};

export default EditTourPage;
