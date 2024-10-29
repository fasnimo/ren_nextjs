// 'use client '

type Tour = {
    id: string;
    name: string;
};

interface ToursListProps{
    toursData: Tour[];
    onClickHandler: (tourId: string) => void;
}

async function ToursList({toursData, onClickHandler}:ToursListProps) {
 
    return (
        <section>
            {toursData.map((tour) => (
                <h2 
                    key={tour.id} 
                    onClick={() => onClickHandler(tour.id)} // Passes tour.id to onClickHandler, which will be handleSelectTour
                    style={{ cursor: 'pointer' }}
                >
                    {tour.name}
                </h2>
            ))}
        </section>
    );
  }
  
  export default ToursList