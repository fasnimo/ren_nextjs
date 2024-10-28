'use client'
import ToursItem from '@/components/ToursItem';
import { useEffect, useState } from 'react';

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
    const { id } = params;
    const [tour, setTour] = useState<Tour | null>(null);
    const [tours, setTours] = useState<Tour[]>([]);

    useEffect(() => {
        const fetchTours = async () => {
            const response = await fetch('https://www.course-api.com/react-tours-project');
            const toursData: Tour[] = await response.json();
            setTours(toursData);
        };

        fetchTours();
    }, []);

    useEffect(() => {
        if (tours.length > 0) {
            const foundTour = tours.find(tour => tour.id === id);
            setTour(foundTour || null); // Set found tour or null if not found
        }
    }, [tours, id]);

    if (!tour) return <div>Loading...</div>;

    return (
        <div>
            <ToursItem tourName={tour.name} tourImage={tour.image} tourInfo={tour.info} tourPrice={tour.price}/>
            {/* <h1>{tour.name}</h1>
            <img src={tour.image} alt={tour.name} />
            <p>{tour.info}</p>
            <p>Price: {tour.price}</p> */}
        </div>
    );
};

export default ToursItemPage;
