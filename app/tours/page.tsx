'use client'
import { useState, useEffect } from "react";
import ToursList from "@/components/ToursList";
import { useRouter } from "next/navigation";

const url = 'http://localhost:3001/api/tours';

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
    const [error, setError] = useState<string | null>(null);

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
        <section className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Tours</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {
                data.length > 0 ? (
                    <ToursList toursData={data} onClickHandler={handleOnClick} />
                ) : (
                    <div className="text-gray-600">No tours available.</div>
                )
            }
        </section>
    );
}

export default ToursPage;
