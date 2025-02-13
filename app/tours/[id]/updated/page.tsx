'use client'
import { useEffect, useState } from 'react';

interface Tour {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

const UpdatedTourPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [tour, setTour] = useState<Tour | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUpdatedTour = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/tours/${id}/updated`);
                if (!response.ok) {
                    throw new Error('Failed to fetch updated tour data');
                }
                const updatedTour = await response.json();
                setTour(updatedTour);
            } catch (err) {
                setError('Failed to load updated tour');
            } finally {
                setLoading(false);
            }
        };

        fetchUpdatedTour();
    }, [id]);

    if (loading) return <div className="text-center text-xl font-semibold mt-10">Loading updated tour...</div>;
    if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;
    if (!tour) return <div className="text-center text-gray-500 text-lg">No tour data found</div>;

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover rounded-md shadow-md" />
            <div className="mt-6">
                <h1 className="text-3xl font-bold text-gray-900">{tour.name}</h1>
                <p className="text-gray-600 text-lg mt-3">{tour.info}</p>
                <div className="mt-4 text-xl font-semibold text-blue-600">
                    Price: ${tour.price}
                </div>
            </div>
        </div>
    );
};

export default UpdatedTourPage;
