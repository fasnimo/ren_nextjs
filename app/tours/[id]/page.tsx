'use client'
import ToursItem from '@/components/ToursItem';
import ToursList from '@/components/ToursList';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

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
    const [tours, setTours] = useState<Tour[]>([]);
    
    const fetchTours = async () => {
        const response = await fetch(`http://localhost:3001/api/tours/${id}`);
        const toursData: Tour = await response.json();
        // setTours(toursData);
        setTour(toursData || null);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    // useEffect(() => {
    //     if (tours.length > 0) {
    //         const foundTour = tours.find(tour => tour.id === id);
    //         setTour(foundTour || null); // Set found tour or null if not found
    //     }
    // }, [tours, id]);

    const handleEdit = () => {
      console.log(`Editing tour with ID: ${id}`);
      router.push(`/tours/edit/${id}`);
      // Implement actual editing logic here, such as opening an edit form or modal
    };

    // const handleDelete = () => {
    //   const confirmDelete = window.confirm('Are you sure you want to delete this tour?');
    //   if (confirmDelete) {
    //       // Remove the tour with this ID from the tours array and update state
    //       setTours(tours.filter(t => t.id !== id));
    //       setTour(null);  // Optionally set tour to null after deletion
    //       console.log(`Deleted tour with ID: ${id}`);
    //       //Need away to show tour was deleted
    //       router.push(`/tours`);
    //   }
    // };

    const handleDelete = async () => {
      const confirmDelete = window.confirm('Are you sure you want to delete this tour?');
      if (confirmDelete) {
          // You might also want to call your API to delete the tour on the server side
          await fetch(`https://www.course-api.com/react-tours-project/${id}`, {
              method: 'DELETE',
          });
  
          console.log(`Deleted tour with ID: ${id}`);
          router.push(`/tours`);
      }
  };
  

    const handleSelectTour = (tourId: string) => {
      router.push(`/tours/${tourId}`);
    };

    if (!tour) return <div>Loading...</div>;

    // return (
    //     <div>
    //       {/* This needs to be reworked to show the list with out the deleted one. */}
    //       {!tour && <ToursList toursData={tours} onClickHandler={handleSelectTour} />}
    //       {/* <ToursList toursData={tours} onClickHandler={handleSelectTour} /> */}
    //       {tour && (
    //             <ToursItem
    //                 tourName={tour.name}
    //                 tourImage={tour.image}
    //                 tourInfo={tour.info}
    //                 tourPrice={tour.price}
    //                 onEdit={handleEdit}
    //                 onDelete={handleDelete}
    //             />
    //         )}
    //         {/* <h1>{tour.name}</h1>
    //         <img src={tour.image} alt={tour.name} />
    //         <p>{tour.info}</p>
    //         <p>Price: {tour.price}</p> */}
    //     </div>
    // );

    return (
      <div>
        {tours.length === 0 ? (
            <div>No tours available.</div>
        ) : (
            <ToursList toursData={tours} onClickHandler={handleSelectTour} />
        )}
        {tour && (
            <ToursItem
                tourName={tour.name}
                tourImage={tour.image}
                tourInfo={tour.info}
                tourPrice={tour.price}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        )}
      </div>
  );
  
};

export default ToursItemPage;
