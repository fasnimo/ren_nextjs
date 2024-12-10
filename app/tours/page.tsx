'use client'
import { useState, useEffect } from "react";
import ToursList from "@/components/ToursList";
import { useRouter } from "next/navigation";

// const url = 'https://www.course-api.com/react-tours-project';
const url = 'http://localhost:3001/api/tours'

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
    const [error, setError] = useState<string | null>(null); // New error state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch tours");
                }
                const toursData = await response.json();
                setData(toursData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            }
        };
        fetchData();
    }, []);

    const handleOnClick = (id: string) => {
        router.push(`/tours/${id}`);
    };

    return (
        <section>
            <h1 className="text-3xl mb-4">Tours</h1>
            {error && <div className="error-message">{error}</div>} {/* Display error */}
            {
                data.length > 0 ?
                    <ToursList toursData={data} onClickHandler={handleOnClick} /> :
                    <div>No tours available.</div>
            }
        </section>
    );
}

export default ToursPage;
