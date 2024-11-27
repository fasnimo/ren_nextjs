'use client'
import { useState, useEffect } from "react";
import ToursList from "@/components/ToursList";
import { useRouter } from "next/navigation";

// const url = 'https://www.course-api.com/react-tours-project';
const url = 'http://localhost:3001/api/tours'

// error? means error is optional
type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
    error?: string;
};

async function ToursPage() {
    const router = useRouter();
    const [data, setData] = useState<Tour[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const toursData = await response.json();
            setData(toursData);
        };
        fetchData();
    }, []);

    const handleOnClick = (id: string) => {
        router.push(`/tours/${id}`);
    };

    return (
        <section>
            <h1 className="text-3xl mb-4">Tours</h1>
            {
            (data.length > 0) ?
            <ToursList toursData={data} onClickHandler={handleOnClick} />  : <div>{data.error}</div>
            }
        </section>
    );
}

export default ToursPage;
