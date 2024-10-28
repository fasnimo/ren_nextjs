'use client'
import { useState, useEffect } from "react";
import ToursList from "@/components/ToursList";
import { useRouter } from "next/navigation";

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
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
            <ToursList toursData={data} onClickHandler={handleOnClick} />
        </section>
    );
}

export default ToursPage;
